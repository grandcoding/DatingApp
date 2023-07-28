import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions

} from 'react-native';
import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from '@rneui/themed';
import Styles from './Styles';
import {launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import { AuthContext } from '../../../navigator/AuthProvider';

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const {height, width}=Dimensions.get('screen')
  const {formDetails}=useContext(AuthContext)
  const handleAddPhotoEvent = () => {
    const options = {};
    launchImageLibrary(options, response => {
      console.log(response.assets[0].uri);
    });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer1}>
        <View style={Styles.imageContainerStyle}>
          <TouchableOpacity
            onPress={() => {
              console.log('Process Initiated');
              handleAddPhotoEvent();
            }}>
            <Image
              source={{
                uri: formDetails.imageURL,
              }}
              style={{height: 120, width: 120, borderRadius: 80, borderColor: '#ea1e63', borderWidth: 1.2}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: 20,fontWeight: '500', color: '#000000' }}>{formDetails.firstName+' '+formDetails.lastName}</Text>
        </View>
      </View>

      <View style={Styles.textInputContainer}>
        <View>
          <Text style={Styles.textFieldStyle}>Name</Text>
          <TextInput style={Styles.textInputStyle} placeholder={formDetails.firstName+' '+formDetails.lastName}/>
        </View>
        <View>
          <Text style={Styles.textFieldStyle}>Email</Text>
          <TextInput
            style={Styles.textInputStyle}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder={formDetails.email}
          />
        </View>
        <View>
          <Text style={Styles.textFieldStyle}>Phone</Text>
          <TextInput
            style={Styles.textInputStyle}
            keyboardType="phone-pad"
            maxLength={10}
            placeholder={formDetails.mobileNumber}
          />
        </View>
        <View>
          <Text style={Styles.textFieldStyle}>Gender</Text>
          <TextInput style={Styles.textInputStyle} placeholder={formDetails.gender} />
        </View>
        <View>
          <Text style={Styles.textFieldStyle}>Date of Birth</Text>
          <TextInput style={Styles.textInputStyle} placeholder={formDetails.birthdate}></TextInput>
        </View>
      </View>
      <View>
        <Button title="Done"
        onPress={()=>{navigation.navigate('ProfileScreen')}}
        containerStyle={{width: width-160, marginTop: 15}}
          buttonStyle={{borderRadius: 50, backgroundColor: '#ea1e63'}}
        />
      </View>
    </View>
  );
};

export default EditProfile;
