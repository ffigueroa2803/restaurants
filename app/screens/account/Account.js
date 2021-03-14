import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'

import { isUserLogged } from '../../utils/actions'

const Account = () => {

    const [login, setLogin] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setLogin(isUserLogged())
        },2000);
    }, [])

    if (login == null) { return <Loading isVisible={true} text="Cargando....." /> }

    return login ? <UserLogged /> : <UserGuest />
}
 
export default Account

const styles = StyleSheet.create({})
