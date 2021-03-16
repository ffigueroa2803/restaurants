import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { size } from 'lodash'
import { Button, Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { validateEmail } from '../../utils/helpers'
import { registerUser } from '../../utils/actions'
import Loading from '../Loading'

const defaultValues = () => {
    return {
        email: "",
        password: "",
        confirm: ""
    }
}

const RegisterForm = () => {

    const navigation = useNavigation()

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")

    const [loading, setLoading] = useState(false)

    const onChange = (e, type) => {
        setFormData({...formData, [type] : e.nativeEvent.text})
    }

    const doRegisterUser = async() => {
        if(!ValidateData()) { return }

        setLoading(true)
        const result = await registerUser(formData.email, formData.password)
        setLoading(false)

        if(!result.statusResponse) {
            setErrorEmail(result.error)
            return
        }
        navigation.navigate("account-stack")
    }

    const ValidateData = () => {
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirm("")
        let isValid = true

        if(!validateEmail(formData.email)) {
            setErrorEmail("Debes ingresar un email válido.")
            isValid = false
        }

        if(size(formData.password) < 6) {
            setErrorPassword("Debes ingresar una contraseña del al menos 6 carácteres.")
            isValid = false
        }

        if(size(formData.confirm) < 6) {
            setErrorConfirm("Debes ingresar una contraseña del al menos 6 carácteres.")
            isValid = false
        }

        if(size(formData.confirm) < 6) {
            setErrorConfirm("Debes ingresar una confirmación de contraseña del al menos 6 carácteres.")
            isValid = false
        }

        if(formData.password !== formData.confirm) {
            setErrorPassword("La contraseña y la confirmación no son iguales.")
            setErrorConfirm("La contraseña y la confirmación no son iguales.")
            isValid = false
        }

        return isValid
    }

    return (
        <View style={styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder="Ingrese su email....."
                keyboardType="email-address"
                onChange={(e) => onChange(e, "email")}
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input
                containerStyle={styles.input}
                placeholder="Ingrese su contraseña....."
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e, "password")}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name={ showPassword ? "eye-outline" : "eye-off-outline" }
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                containerStyle={styles.input}
                placeholder="Confirme su contraseña....."
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e, "confirm")}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name={ showPassword ? "eye-outline" : "eye-off-outline" }
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button 
                title="Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={() => doRegisterUser()}
            />
            <Loading isVisible={loading} text="Creando cuenta...." />
        </View>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    input: {
        width: "100%"
    },
    btnContainer: {
        marginBottom: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#442484"
    },
    icon: {
        color: "#c1c1c1"
    }
})
