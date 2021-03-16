import React, { useCallback, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'

import { getCurrentUser } from '../../utils/actions'

const Account = ({ route }) => {

    const { close } = route.params === undefined ? {} : route.params

    const [login, setLogin] = useState(null)

    useFocusEffect(
        useCallback(() => {
            const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)
        },[close])
    )
    
    if (login == null) { return <Loading isVisible={true} text="Cargando....." /> }

    return login ? <UserLogged /> : <UserGuest />
}
 
export default Account

const styles = StyleSheet.create({})
