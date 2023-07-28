import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {height, width}=Dimensions.get('screen')

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 0.8,
    backgroundColor: '#f2f2f2'
  },
  imageContainerStyle: {
    
  },
  innerContainer1:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14
  },
  iconStyle: {
    backgroundColor: '#DCDCDC',
  },
  textInputStyle: {
    borderBottomColor: '#d2d6da',
    borderBottomWidth: 1,
    fontSize: 17,
    paddingHorizontal: 10
  },
  textInputContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    height: 420,
    width: width-50,
    backgroundColor: '#fcfcfc',
    paddingHorizontal: 10,
    // paddingHorizontal: 4
  },
  textFieldStyle:{
    fontSize: 18,
    paddingVertical: 3,
    fontWeight: '400',
    color: '#000000'
  }
});

export default Styles;
