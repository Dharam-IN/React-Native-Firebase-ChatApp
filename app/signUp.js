import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView'
import {useAuth} from '../context/authContext'


const SignUp = () => {

  const {register} = useAuth()

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef("")
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const profileRef = useRef("")

  const handleRegister = async() => {
    if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
      Alert.alert("Sign Up", "Please Fill all the fields!");
      return;
    }

    setLoading(true);

    const response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current)
    setLoading(false)
    console.log("got result", response)

    if(!response.success){
      Alert.alert("Sign up", response.msg);
    }

  }

  return (
    <CustomKeyboardView>
      <StatusBar style='dark'/>
      <View className="flex-1 gap-12" style={{paddingTop: hp(5), paddingHorizontal: wp(5)}}>
        {/* SignUp Image */}
        <View className="items-center">
          <Image style={{height: hp(25)}} resizeMode='contain' source={require("../assets/images/SignUp.jpg")}/>
        </View>

        <View className="gap-10">
          <Text className="font-extrabold tracking-widest text-center w-full text-neutral-800" style={{fontSize: hp(4)}}>Sign Up</Text>

          <View className="gap-4">
            <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl">
              <Octicons name='person' size={hp(2.7)} color={"gray"}/>
              <TextInput
                onChange={value => usernameRef.current = value}
                style={{fontSize: hp(2)}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder='Please Enter Your Username'
                placeholderTextColor={"gray"}
              />
            </View>

              <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl">
                <Octicons name='mail' size={hp(2.7)} color={"gray"}/>
                <TextInput  
                  onChange={value => emailRef.current = value}
                  style={{fontSize: hp(2)}}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder='Please Enter Your Email'
                  placeholderTextColor={"gray"}
                />
            </View>
            <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl">
                  <Octicons name='lock' size={hp(2.7)} color={"gray"}/>
                  <TextInput  
                    onChange={value => passwordRef.current = value}
                    style={{fontSize: hp(2)}}
                    className="flex-1 font-semibold text-neutral-700"
                    placeholder='Please Enter Your Password'
                    secureTextEntry
                    placeholderTextColor={"gray"}
                  />
              </View>
            <View className="gap-2">
              <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-200 items-center rounded-xl">
                  <Octicons name='image' size={hp(2.7)} color={"gray"}/>
                  <TextInput  
                    onChange={value => profileRef.current = value}
                    style={{fontSize: hp(2)}}
                    className="flex-1 font-semibold text-neutral-700"
                    placeholder='Please give us to profile url'
                    placeholderTextColor={"gray"}
                  />
              </View>
                <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-800">forgot password</Text>
            </View>

            {/* Submit Button */}

            <View>
              {
                loading ? (
                  <View className="flex-row justify-center">
                    <Loading size={hp(10)}/>
                  </View>
                ) : (
                  <TouchableOpacity className="bg-indigo-500 py-3 px-4 rounded-xl" style={{height: hp(6.5)}} onPress={handleRegister}>
                    <Text style={{fontSize: hp(2.7)}} className="text-center text-white font-bold tracking-wider">Sign Up</Text>
                  </TouchableOpacity>
                )
              }
            </View>
            


            {/* Sign up text */}
            <View className="flex-row justify-center">
              <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">Allready Have an Account? </Text>
              <Pressable onPress={() => router.push('signIn')}>
                <Text style={{fontSize: hp(1.8)}} className="font-semibold text-indigo-500">Sign in </Text>
              </Pressable>
            </View>

          </View>

        </View>

      </View>
    </CustomKeyboardView>
  )
}

export default SignUp