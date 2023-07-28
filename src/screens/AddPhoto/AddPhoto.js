import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {AuthContext} from '../../navigator/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const AddPhoto = ({navigation}) => {
  const [photoURI, setPhotoURI] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [url, setUrl] = useState('');
  const {formDetails, setFormDetails, uid, setUid} = useContext(AuthContext);

  const uploadImage = () => {
    const options = {};
    launchImageLibrary(options, res => {
      if (res) {
        const uri = res.assets[0].uri;
        setPhotoURI(uri);
      } else {
        console.log('Error');
      }
    });
  };

  const addData = async () => {
    try {
      await firestore()
        .collection('users')
        .add({
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
          gender: formDetails.gender,
          birthdate: formDetails.birthdate,
          imageURL: formDetails.imageURL,
          mobileNumber: formDetails.mobileNumber,
          UserID: formDetails.uid
        })
        .then(result => {
          console.log('Data added successfully');
        });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const submitProfile = async () => {
    const onlineURL = await uploadImageToStorage();
    setUrl(onlineURL);
  };

  useEffect(() => {
    setFormDetails({...formDetails, imageURL: url});
  }, [url]);

  const uploadImageToStorage = async () => {
    let filename = photoURI.substring(photoURI.lastIndexOf('/') + 1);
    setUploading(true);
    setTransferred(0);
    const storageRef = storage().ref(`profileImages/${filename}`);
    const task = storageRef.putFile(photoURI);

    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      const percent = Math.round(
        (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
      );
      setTransferred(percent);
      if (percent === 100) {
        console.log('Image Uploading Completed');
        // navigation.navigate('MainApp')
      }
    });

    try {
      await task;
      const url = await storageRef.getDownloadURL();
      setUploading(false);
      // setPhotoURI(null);
      return url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconOuterContainer}>
        <View style={styles.iconInnerContainer}>
          <TouchableOpacity
            onPress={() => {
              uploadImage();
            }}>
            {photoURI === null ? (
              <Icon name="adduser" size={100} color="#ffffff" />
            ) : (
              <Image
                source={{uri: photoURI}}
                style={{
                  borderRadius: 70,
                  height: 130,
                  width: 130,
                  borderColor: '#dbdbda',
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headerContainer}>
          <Text
            style={[
              styles.textStyle,
              {color: '#ea1e63', fontWeight: 'bold', fontSize: 30},
            ]}>
            Build Your Profile
          </Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={[styles.textStyle, {textAlign: 'center'}]}>
            Add your photo to complete the signup process
          </Text>
        </View>
      </View>

      <View style={styles.btnGroupContainer}>
        <View>
          {photoURI === null ? (
            <Button
              title={'Add your photo'}
              onPress={() => {
                uploadImage();
              }}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btnTextStyle}
            />
          ) : (
            <Button
              title={'Change your photo'}
              onPress={() => {
                uploadImage();
              }}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btnTextStyle}
            />
          )}
        </View>
        <View>
          {uploading ? (
            <Button
              containerStyle={[styles.btnContainer, {marginHorizontal: 10}]}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btnTextStyle}>
              <Text style={{color: '#ffffff', fontSize: 18}}>
                Confirming your details
              </Text>
              <View>
                <ActivityIndicator size="small" color="#ffffff" />
              </View>
            </Button>
          ) : (
            <Button
              title={'Confirm Image'}
              onPress={() => {
                submitProfile();
              }}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btnTextStyle}
            />
          )}
          {formDetails.imageURL!==''?(<Button
            title={`Let's start dating`}
            onPress={() => {
              addData();
              navigation.navigate('MainApp')
            }}
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnStyle}
            titleStyle={styles.btnTextStyle}
          />): (null)}
          
        </View>
      </View>
    </View>
  );
};

export default AddPhoto;
