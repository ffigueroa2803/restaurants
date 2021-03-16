import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Divider } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LoginForm from '../../components/account/LoginForm'

const CreateAccount = () => {

    const navigation = useNavigation()

    return (
        <Text 
            style={styles.register}
            onPress={() => navigation.navigate('register-stack')}
        >
            ¿Aún no tienes una cuenta? {" "}
            <Text style={styles.btnRegister}>
                Regístrate
            </Text>
        </Text>
    )
}

const Login = () => {
    return (
        <KeyboardAwareScrollView>
            <Image 
                source={require('../../assets/restaurant-logo.png')}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.container}>
                <LoginForm />
                <CreateAccount />
            </View>
            <Divider style={styles.divider}/>
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",
        marginBottom: 20
    },
    container: {
        marginHorizontal: 40
    },
    divider: {
        backgroundColor: "#442484",
        margin: 40
    },
    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegister: {
        color: "#442484",
        fontWeight: "bold"
    }
})
