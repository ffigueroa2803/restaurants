import React from 'react'
import { Image, StyleSheet } from 'react-native'
import RegisterForm from '../../components/account/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = () => {
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Image 
                source={require('../../assets/restaurant-logo.png')}
                resizeMode="contain"
                style={styles.image}
            />
            <RegisterForm />
        </KeyboardAwareScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 150,
        width: "100%",
        marginBottom: 20
    }
})
