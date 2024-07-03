import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

const SignIn = () => {
  return (
    <View>
      <StatusBar style='dark'/>
      <View className="flex-1 gap-12">
        {/* SignIn Image */}
        <View className="items-center">
          <Image />
        </View>
      </View>
    </View>
  )
}

export default SignIn