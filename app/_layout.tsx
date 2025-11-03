import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import './global.css'

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'JosefinSans-Bold': require('../assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans-SemiBold': require('../assets/fonts/JosefinSans-SemiBold.ttf'),
    'JosefinSans-Medium': require('../assets/fonts/JosefinSans-Medium.ttf'),
    'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-Light': require('../assets/fonts/JosefinSans-Light.ttf'),
  })

  useEffect(() => {
    // Prevent splash from hiding before fonts are ready
    SplashScreen.preventAutoHideAsync()
  }, [])

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded) {
    return null
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
