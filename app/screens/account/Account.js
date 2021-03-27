import React, { useCallback, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import firebase from 'firebase/app'
import 'firebase/auth'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'

const Account = () => {

    const [login, setLogin] = useState(null)

    useFocusEffect(
        useCallback(() => {
            firebase.auth().onAuthStateChanged((userInfo) => {
                userInfo ? setLogin(true) : setLogin(false)
            })
        }, [])
    )
   
    if (login == null) { return <Loading isVisible={true} text="Cargando....." /> }

    return login ? <UserLogged /> : <UserGuest />
}
 
export default Account

const styles = StyleSheet.create({})
