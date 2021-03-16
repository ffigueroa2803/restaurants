import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements'

import { closeSession } from '../../utils/actions'

const UserLogged = ({close}) => {

    console.log(close)
    const navigation = useNavigation()

    return (
        <View>
            <Text>UserLogged...</Text>
            <Button 
                title="Cerrar Sessión"
                onPress={() => {
                    closeSession()
                    navigation.navigate("account-stack",{ close : true })
                }}
            />
        </View>
    )
}

export default UserLogged

const styles = StyleSheet.create({})
