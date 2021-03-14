import React from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { useNavigation} from '@react-navigation/native'

import { Button } from 'react-native-elements'

const UserGuest = () => {

    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent={true}
            style={styles.viewBody}
        >
            <Image 
                source={require("../../assets/restaurant-logo.png")} 
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
            <Text style={styles.description}>
                ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cuál te ha     gustado más y comenta cómo a sido tu experiencia.
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Ver tu perfil"
                onPress={() => navigation.navigate("login-stack")}
            />
        </ScrollView>
    )
}

export default UserGuest

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10,
        alignContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description: {
        textAlign: "justify",
        marginBottom: 20,
        color: "#a65273"
    },
    button: {
        backgroundColor: "#442484"
    }
})
