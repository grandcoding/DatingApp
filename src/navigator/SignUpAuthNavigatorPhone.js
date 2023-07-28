import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register1 from '../screens/Register1/Register1'
import Register2 from '../screens/Register2/Register2'
import AddPhoto from '../screens/AddPhoto/AddPhoto'
import Login from '../screens/Login/Login'
import MobilePhoneLogin from '../screens/MobilePhoneLogin/MobilePhoneLogin'
import OverlayScreen from '../screens/MobilePhoneLogin/OverlayScreen'
import HomeNavigator from './HomeNavigator'

const SignUpAuthNavigatorPhone = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='MainApp'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='MobilePhoneLogin' component={MobilePhoneLogin}/>
        <Stack.Screen name='OverlayScreen' component={OverlayScreen}/>
        <Stack.Screen name='Form1' component={Register1}/>
        <Stack.Screen name='Form2' component={Register2}/>
        <Stack.Screen name='AddPhoto' component={AddPhoto}/>
        <Stack.Screen name='MainApp' component={HomeNavigator}/>
    </Stack.Navigator>
  )
}

export default SignUpAuthNavigatorPhone