import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Styles = StyleSheet.create({
  container: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    backgroundColor: '#ededed',
  },
  textContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
  },
  textInputContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
  },
  headerContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    padding: 10,
    marginTop: 40,
  },
  subHeaderContainer: {
    // borderColor: 'black',
    // borderWidth: 1,
    padding: 10,
    marginBottom: 40,
  },
  header: {
    fontSize: 30,
    fontWeight: '500',
    color: '#ea1e63',
  },
  subHeader: {
    fontSize: 18,
    color: '#000000',
  },
  textBoxContainer: {
    flexDirection: 'row',
    marginHorizontal: 22,
    marginBottom: 48
  },
  textBox1: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 0.22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30
  },
  textBox2: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    backgroundColor: '#ffffff',
    height: 60,
    justifyContent: 'center',
    // borderTopRightRadius: 30,
    // borderBottomRightRadius: 30
    borderRadius: 30
  },
  textBox1Inner:{
    color: '#000000',
    fontSize: 20,
    marginLeft: 8,
    

  },
  textBox2Inner:{
    fontSize: 20,
    paddingHorizontal: 10
  },
  btnContainer:{
    // borderColor: 'black',
    // borderWidth: 1,
    justifyContent: 'center'
  }
  
});

export default Styles;
