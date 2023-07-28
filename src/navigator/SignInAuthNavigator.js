import React from 'react';
import HomeNavigator from './HomeNavigator';
import Welcome from '../screens/Welcome/Welcome';
import Login from '../screens/Login/Login';
import MobilePhoneLogin from '../screens/MobilePhoneLogin/MobilePhoneLogin';
import Register1 from '../screens/Register1/Register1';
import Register2 from '../screens/Register2/Register2';
import AddPhoto from '../screens/AddPhoto/AddPhoto';
import OverlayScreen from '../screens/MobilePhoneLogin/OverlayScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SignInAuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mobile"
        component={MobilePhoneLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Overlay'
        component={OverlayScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SignInAuthNavigator;
