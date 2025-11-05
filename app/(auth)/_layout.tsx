import topBackground from "@/assets/images/login-graphic.png";
import * as NavigationBar from 'expo-navigation-bar';
import { Redirect, Slot } from "expo-router";
import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    useWindowDimensions,
    View,
} from 'react-native';

const AuthLayout = () => {
  const { height: windowHeight } = useWindowDimensions()
  const [keyboardHeight, setKeyboardHeight] = useState(0)

   const isAuthenticated = true
  
    if(isAuthenticated) return <Redirect href='/' />

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', (e) => {
      // e.endCoordinates.height is reliable cross-platform
      setKeyboardHeight(e.endCoordinates?.height || 0)
    })
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0)
    })

    // optional: make Android nav bar match your background color
    if (Platform.OS === 'android') {
        NavigationBar.setBackgroundColorAsync('#111827').catch(() => {})
        NavigationBar.setBehaviorAsync('inset-swipe').catch(() => {})
    }

    return () => {
      showSub.remove()
      hideSub.remove()
    }
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#111827' }}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#111827' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            minHeight: windowHeight,      // keep ScrollView filling the whole screen
            backgroundColor: '#111827',
            paddingBottom: keyboardHeight, // push content above keyboard and avoid bottom gap
          }}
          style={{ flex: 1 }}
        >
          <View style={{ width: '100%' }}>
            <ImageBackground
              source={topBackground}
              resizeMode="stretch"
              style={{ width: '100%', height: Dimensions.get('screen').height / 2.25}}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Slot/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default AuthLayout
