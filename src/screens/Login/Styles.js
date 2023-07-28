import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#ededed',
  },
  headerContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    marginTop:80,
    marginBottom: 60
  },
  textContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200

  },
  subTextContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    marginVertical: 22,
  },
  linkContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 80
  },
  headerStyle: {
    color: '#ea1e63',
    fontSize: 45,
  },
  textStyle: {
    color: '#000000',
    fontSize: 18,
  },
  buttonTextStyle1: {
    fontSize: 20,
    color: '#ea1e63',
    // borderColor: 'black',
    // borderWidth: 1,
    // marginHorizontal: 98,
    fontWeight: 'bold'
  },
  buttonTextStyle2:{
    // borderColor: 'black',
    // borderWidth: 1,
    fontSize: 18,
    color: '#ffffff'
  },
  btnContainer:{
    // borderColor: 'black',
    // borderWidth: 1,
    
  },
  btnStyle: {
    marginVertical: 10,
    // borderColor: 'black',
    // borderWidth: 1,
    width: width-70
  },
  linkText:{
    // borderColor: 'black',
    // borderWidth: 1,
    marginHorizontal: 20,
    color: '#000000'
  }
});

export default Styles;
