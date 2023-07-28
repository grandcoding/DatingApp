import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountSettings from '../screens/Profile/AccountSettings/AccountSettings';
import HelpCenter from '../screens/Profile/HelpCenter/HelpCenter';
import AboutUs from '../screens/Profile/AboutUs/AboutUs';
import DeleteAccount from '../screens/Profile/DeleteAccount/DeleteAccount';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfile from '../screens/Profile/EditProfile/EditProfile';
import SignOut from '../screens/Profile/SignOut/SignOut';

export default function ProfileNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 25, color: '#ea1e63'},
          headerTitle: 'Edit Profile',
          headerTintColor: '#ea1e63'
        }}
      />
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{
          headerTitleStyle: {
            color: '#ea1e63',
            fontSize: 25,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#ea1e63'
        }}
      />
    </Stack.Navigator>
  );
}
