import { View, Text, Alert } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../navigator/AuthProvider'


// const {signOut}=useContext(AuthContext)

export default function LogOut() {
  return (
    Alert.alert(
        "Confirm Logout",
        "You are going to Logout. Do you want to continue?",
        [
            {
                text: 'Yes',
                onPress: ()=>{Alert.alert('Response is Positive')}
            },
            {
                text: 'No',
                onPress: ()=>Alert.alert('Response is Negative')
            }
        ],
       {
        cancelable: true
       }
    )
  )
}