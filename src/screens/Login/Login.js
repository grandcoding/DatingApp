import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const {height, width} = Dimensions.get('screen');
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.headerStyle}>Dating</Text>
      </View>
      <View style={Styles.textContainer}>
        <View style={Styles.subTextContainer}>
          <Text style={Styles.textStyle}>Sign in to Continue</Text>
        </View>
        <View>
          <Button
            // title={'Use Phone Number'}
            onPress={() => {
              navigation.navigate('MobilePhoneLogin');
            }}
            containerStyle={{width: width - 70, borderRadius: 20}}
            titleStyle={{color: '#ea1e63', fontSize: 18}}
            buttonStyle={{backgroundColor: '#ffffff'}}>
            <Icon name="mobile1" size={24} style={{marginRight: 6}} />
            <Text style={Styles.buttonTextStyle1}>Use Phone Number</Text>
          </Button>
        </View>
        <View style={Styles.subTextContainer}>
          <Text style={Styles.textStyle}>Or sign in with</Text>
        </View>
      </View>
      <View style={Styles.btnContainer}>
        <View style={Styles.btnStyle}>
          <Button buttonStyle={{backgroundColor: '#ea1e63',borderRadius: 20}}>
            <Icon name="google" size={24} color='#eeeeee' style={{marginRight: 1}}/>
            <Text style={Styles.buttonTextStyle2}> Google</Text>
          </Button>
        </View>
        <View style={Styles.btnStyle}>
          <Button buttonStyle={{backgroundColor: '#ea1e63', borderRadius: 20}}>
            <Icon name="facebook-square" size={24} color='#eeeeee'  style={{marginRight: 6}}/>
            <Text style={Styles.buttonTextStyle2}>Facebook</Text>
          </Button>
        </View>
      </View>
      <View style={{height: 200, width: width}}>

      </View>
      <View style={Styles.linkContainer}>
        <TouchableOpacity>
          <Text style={Styles.linkText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
