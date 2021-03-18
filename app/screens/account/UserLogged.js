import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

import { closeSession, getCurrentUser } from '../../utils/actions'
import Loading from '../../components/Loading'
import InfoUser from '../../components/account/InfoUser'
import AccountOptions from '../../components/account/AccountOptions'

const UserLogged = () => {

    const toastRef = useRef()
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)
    const [relodUser, setRelodUser] = useState(false)

    useEffect(() => {
        setUser(getCurrentUser())
    }, [relodUser])

    return (
        <View style={styles.container}>
            { 
                user && (
                    <View>
                        <InfoUser 
                            user={user} 
                            setLoading={setLoading} 
                            setLoadingText={setLoadingText} 
                        /> 
                        <AccountOptions 
                            user={user}  
                            toastRef={toastRef}
                            setRelodUser={setRelodUser}
                        />
                    </View>
                )
            }
            <Button 
                title="Cerrar Sessión"
                buttonStyle={styles.btnCloseSession}
                titleStyle={styles.btnCloseSessionTitle}
                onPress={() => {
                    closeSession()
                    navigation.navigate("restaurants")
                }}
            />
            <Toast ref={toastRef} position="center" opacity={0.9} />
            <Loading isVisible={loading} text={loadingText} />
        </View>
    )
}

export default UserLogged

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        backgroundColor: "#f9f9f9" 
    },
    btnCloseSession: {
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#442484",
        borderBottomWidth: 1,
        borderBottomColor: "#442484",
        paddingVertical: 10
    },
    btnCloseSessionTitle: {
        color: "#442484"
    }
})
