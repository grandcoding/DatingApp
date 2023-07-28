import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
// import SignInAuthNavigator from './SignInAuthNavigator';
import SignUpAuthNavigatorPhone from './SignUpAuthNavigatorPhone';
import SignInAuthNavigator from './SignInAuthNavigator';

const Routes = () => {
  return (
    <NavigationContainer>
        <SignUpAuthNavigatorPhone/>
    </NavigationContainer>
  );
};

export default Routes;
