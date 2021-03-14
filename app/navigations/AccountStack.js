import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../screens/account/Account'

const Stack = createStackNavigator()

const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="account-stack"
                component={Account}
                options={{ title:"Cuenta" }}
            />
        </Stack.Navigator>
    )
}

export default AccountStack