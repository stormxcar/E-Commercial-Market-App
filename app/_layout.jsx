import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.container}>
      <Text>E Commercial market app</Text>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
    container:{
       display: 'flex',
       flex:1,
       alignItems: 'center',
       justifyContent:'center',
       backgroundColor:'cyan'
    }
})