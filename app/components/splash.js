import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

export const Splash = ({ loading }) => {
  if (!loading) {
    return <View />
  }

  return (
    <View style={styles.container}>
      <Animatable.Image
        style={{ width: 300, height: 400  }}
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        source={require("../assets/splash.png")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
})