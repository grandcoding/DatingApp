import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register2 from '../screens/Register2/Register2'
import AddPhoto from '../screens/AddPhoto/AddPhoto'

const SignUpAuthNavigatorSocial = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Register2' component={Register2}/>
        <Stack.Screen name='AddPhoto' component={AddPhoto}/>
    </Stack.Navigator>
  )
}

export default SignUpAuthNavigatorSocial