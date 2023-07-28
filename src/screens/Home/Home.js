import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import CardSwiper from '../../components/CardSwiper';

const Home = navigation => {
  return (
    <SafeAreaView>
      <CardSwiper />
    </SafeAreaView>
  );
};

export default Home;
