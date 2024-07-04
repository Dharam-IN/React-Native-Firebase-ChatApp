import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'

const home = () => {

  const {logout} = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <View>
      {/* <Text>home</Text> */}
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  )
}

export default home