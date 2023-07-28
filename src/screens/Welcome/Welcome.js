import {StyleSheet, Text, View, SafeAreaView,Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/themed';
import Styles from './Styles';

const Welcome = ({navigation}) => {
  const {height, width}=Dimensions.get('screen')
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.textContainer}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerStyle}>Dating</Text>
        </View>
        <View style={Styles.subTextContainer}>
          <View>
            <Text style={Styles.subTextStyle}>Date with a Stranger</Text>
          </View>
          <View>
            <Text style={Styles.subTextStyle}> Make new friends</Text>
          </View>
        </View>
      </View>
      <View>
        <Button
          title={`Let's get started`}
          onPress={() => {
            navigation.navigate('Login');
          }}
          containerStyle={{borderRadius: 20, width: width-70 }}
          buttonStyle={{backgroundColor: '#ffffff'}}
          titleStyle={{color: '#ea1e63', fontSize: 18}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
