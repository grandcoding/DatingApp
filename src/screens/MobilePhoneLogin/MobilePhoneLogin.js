import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Modal,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Button, Overlay} from '@rneui/themed';
import OverlayScreen from './OverlayScreen';
import Styles from './Styles';
import {CountryPicker} from 'react-native-country-codes-picker';
import Icon from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../../navigator/AuthProvider';
import auth from '@react-native-firebase/auth';

const MobilePhoneLogin = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const {height, width} = useWindowDimensions();
  const [mobileNumber, setMobileNumber] = useState('');
  const [visible, setVisible] = useState(false);
  // const [combinedCode, setCombinedCode]=useState('')

  const {formDetails, setFormDetails, confirm, setConfirm} =
    useContext(AuthContext);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const stringConcatenator = (s1, s2) => {
    const result = s1.concat(s2);
    return result;
  };

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    // console.log(confirmation)
    if (confirmation) {
      setConfirm(confirmation);
      navigation.navigate('OverlayScreen');
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.textContainer}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.header}>What's Your Number ?</Text>
        </View>
        <View style={Styles.subHeaderContainer}>
          <Text style={Styles.subHeader}>
            Please enter your valid phone number. We will send you a 6 digit
            code to verify you.
          </Text>
        </View>
      </View>

      <View style={Styles.textBoxContainer}>
        {/* <View style={Styles.textBox1}>
          <TextInput
            onPressIn={() => {
              setShow(true);
            }}
            value={countryCode}
            style={Styles.textBox1Inner}
          />

          <Icon
            name="triangle-down"
            size={22}
            style={{
              color: '#666666',
              marginRight: 9,
              // borderColor: 'black',
              // borderWidth: 1,
            }}
            onPress={() => {
              setShow(true);
            }}
          />
          <CountryPicker
            show={show}
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
        </View> */}
        <View style={Styles.textBox2}>
          <TextInput
            style={Styles.textBox2Inner}
            placeholder="Enter mobile number"
            value={mobileNumber}
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={newData => {
              setMobileNumber(newData);
            }}
          />
        </View>
      </View>

      <View style={Styles.btnContainer}>
        {!confirm ? (
          <Button
            title={'Continue'}
            onPress={() => {
              toggleOverlay();
              // const combinedCode = stringConcatenator(
              //   countryCode,
              //   mobileNumber,
              // );
              // console.log(combinedCode)
              signInWithPhoneNumber('+91' + mobileNumber);
              setFormDetails({...formDetails, mobileNumber: '+91'+mobileNumber});
              // navigation.navigate('OverlayScreen');
            }}
            containerStyle={{marginHorizontal: 22, borderRadius: 30}}
            buttonStyle={{backgroundColor: '#ea1e63', height: 50}}
            titleStyle={{fontSize: 18}}
          />
        ) : (
          <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{
              height: height - 450,
              width: width - 25,
              borderRadius: 18,
            }}>
            <OverlayScreen />
          </Overlay>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MobilePhoneLogin;
