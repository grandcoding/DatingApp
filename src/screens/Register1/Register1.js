import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React, {useState, useContext} from 'react';
import {Button} from '@rneui/themed';
import styles from './Styles';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigator/AuthProvider';
const Register1 = ({navigation}) => {
  // const [fname, setFname]=useState('')
  // const [lname, setLname]=useState('')
  // const [email, setEmail]=useState('')
  const {
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    formDetails,
    setFormDetails,
  } = useContext(AuthContext);

  const {height, width} = Dimensions.get('screen');
  return (
    <View style={styles.container}>
      <View style={styles.textfieldContainer}>
        <View>
          <Text style={styles.textStyle}>First Name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter your first name"
            value={formDetails.firstName}
            onChangeText={newData => {
              setFormDetails({...formDetails, firstName: newData});
            }}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Last Name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter your last name"
            value={formDetails.lastName}
            onChangeText={newData => {
              setFormDetails({...formDetails, lastName: newData});
            }}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Email</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter your email"
            value={formDetails.email}
            onChangeText={newData => {
              setFormDetails({...formDetails, email: newData});
            }}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.btnOuterContainer}>
        <Button
          title={'Continue'}
          onPress={() => {
            navigation.navigate('Form2');
          }}
          containerStyle={styles.btnInnerContainer}
          buttonStyle={styles.btnStyle}
          titleStyle={styles.btnTextStyle}
        />
      </View>
    </View>
  );
};

export default Register1;
