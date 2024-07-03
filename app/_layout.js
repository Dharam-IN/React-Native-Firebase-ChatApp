import { View, Text } from 'react-native'
import React from 'react'
import {Slot} from 'expo-router'
import "../global.css"

const Layout = () => {
  return (
    <View>
      <Slot/>
    </View>
  )
}

export default Layout