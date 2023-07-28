import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useRef, useContext, useEffect} from 'react';
import styles from './OverlayStyles';
import Timer from './Timer';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../navigator/AuthProvider';
import auth from '@react-native-firebase/auth';

const OverlayScreen = ({navigation}) => {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');
  
  const [code, setCode] = useState('');
  const {formDetails, setFormDetails, confirm} = useContext(AuthContext);

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);

  const resetButtonAction = () => {
    setCode('');
  };  

  // useEffect(()=>{
  //   console.log('Hello')
  // },[formDetails])

  async function confirmCode() {
    try {
      let data=await confirm.confirm(code);
      if(data){
        // console.log('Success')
        setFormDetails({...formDetails, uid: data.user.uid})
        navigation.navigate('Form1')
      }
    } catch (error) {
      // Alert.alert('Authentication Failed')
      console.log('Invalid OTP')
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}>Verify Phone Number</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          OTP has been sent to you on your phone number. Please enter it below
        </Text>
      </View>
      {/* <View style={styles.otpInputStyle}>
        <TextInput
          ref={pin1Ref}
          style={styles.otpIndividualInputStyle}
          maxLength={1}
          placeholder="0"
          placeholderTextColor="#efefef"
          textAlign="center"
          keyboardType="phone-pad"
          multiline={true}
          numberOfLines={1}
          value={pin1}
          onChangeText={newInput => {
            setPin1(newInput);
            if (setPin1 !== '') {
              pin2Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin2Ref}
          style={styles.otpIndividualInputStyle}
          maxLength={1}
          placeholder="0"
          placeholderTextColor="#efefef"
          textAlign="center"
          keyboardType="phone-pad"
          multiline={true}
          numberOfLines={1}
          value={pin2}
          onChangeText={newInput => {
            setPin2(newInput);

            if (setPin2 !== '') {
              pin3Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin3Ref}
          style={styles.otpIndividualInputStyle}
          maxLength={1}
          placeholder="0"
          placeholderTextColor="#efefef"
          textAlign="center"
          keyboardType="phone-pad"
          multiline={true}
          numberOfLines={1}
          value={pin3}
          onChangeText={newInput => {
            setPin3(newInput);
            if (setPin3 !== '') {
              pin4Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin4Ref}
          style={styles.otpIndividualInputStyle}
          maxLength={1}
          placeholder="0"
          placeholderTextColor="#efefef"
          textAlign="center"
          keyboardType="phone-pad"
          multiline={true}
          numberOfLines={1}
          value={pin4}
          onChangeText={newInput => {
            setPin4(newInput);

            if (setPin1 !== '') {
              pin5Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin5Ref}
          style={styles.otpIndividualInputStyle}
          maxLength={1}
          placeholder="0"
          placeholderTextColor="#efefef"
          textAlign="center"
          keyboardType="phone-pad"
          multiline={true}
          numberOfLines={1}
          value={pin5}
          onChangeText={newInput => {
            setPin5(newInput);
            if (setPin5 !== '') {
              pin6Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin6Ref}
          style={styles.otpIndividualInputStyle}
          maxLength={1}
          placeholder="0"
          placeholderTextColor="#efefef"
          textAlign="center"
          keyboardType="phone-pad"
          multiline={true}
          numberOfLines={1}
          value={pin6}
          onChangeText={newInput => {
            setPin6(newInput);
            if (setPin6 !== '') {
              pin6Ref.current.focus();
              // stringConcatenator(pin1, pin2, pin3, pin4, pin5, pin6);
              // console.log(pin1, pin2, pin3, pin4, pin5, pin6)
            }
          }}
        />
      </View> */}
      <View>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1, width: 200}}
          value={code}
          onChangeText={text => {
            setCode(text);
          }}
          autoComplete={'off'}
          maxLength={6}
        />
      </View>

      <View style={{marginVertical: 20}}>
        <TouchableOpacity>
          <Text style={{fontSize: 18}}>Didn't receive an OTP?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnStyle}>
          {code.length === 6 ? (
            <TouchableOpacity
              onPress={() => {
                // console.log(code)
                confirmCode();
                navigation.navigate('Form1');
              }}>
              <Text
                style={{textAlign: 'center', color: '#ffffff', fontSize: 18}}>
                Confirm Code
              </Text>
            </TouchableOpacity>
          ) : (
            <View>
              <Timer />
            </View>
          )}
        </View>

        <View style={styles.btnStyle}>
          <TouchableOpacity
            onPress={() => {
              resetButtonAction();
            }}>
            <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 18}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OverlayScreen;
