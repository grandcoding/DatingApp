import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const Photo = () => {
  const options = {};
  launchImageLibrary(options, res => {
    if(res){
        console.log(res.assets[0].uri)
        // console.log("Image found")
        return(res.assets[0].uri)
    }
    else{
        console.log("Error")
    }
  });
};

export default Photo;
