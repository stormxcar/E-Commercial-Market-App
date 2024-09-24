import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot,Stack} from 'expo-router'
// import '../src/styles/tailwind.css';
import useFonts from 'expo-font'

// const Stack = createStackNavigatior();

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
    // <Slot/> // cho phep chay file o muc con
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container:{
       display: 'flex',
       flex:1,
       alignItems: 'center',
       justifyContent:'center',
       backgroundColor:'#fff'
    }
})