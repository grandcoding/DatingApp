import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from './AuthProvider'
import Routes from './Routes'

const Providers = () => {
  return (
    <AuthProvider>
        <Routes/>
    </AuthProvider>
  )
}

export default Providers