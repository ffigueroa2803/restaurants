import { Linking } from "react-native"

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

export const fileToBlob = async(path) => {
    const file = await fetch(path) 
    const blob = file.blob()
    return blob
}

export const formatPhone = (callingCode, phone) => {
    return `+(${callingCode}) ${phone.substr(0, 3)} ${phone.substr(3, 3)} ${phone.substr(6, 4)}`
}

export const callNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`)
}

export const sendWhatsApp = (phoneNumber, text) => {
    const link = `https://wa.me/${phoneNumber}?text=${text}`
    Linking.canOpenURL(link).then((supported) => {
        if (!supported) {
            Alert.alert("Por favor instale WhatsApp para enviar un mensaje directo")
            return
        }
        return Linking.openURL(link)
    })
}

export const sendEmail = (to, subject, body) => {
    Linking.openURL(`mailto:${to}?subject=${subject}&body=${body}`)
}   
