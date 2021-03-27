import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../screens/account/Account'
import Login from '../screens/account/Login'
import Register from '../screens/account/Register'

const Stack = createStackNavigator()

const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="account-stack"
                component={Account}
                options={{ 
                    title:"Cuenta",
                    headerLeft: null,
                    gestureEnabled: false
                }}
            />
            <Stack.Screen 
                name="login-stack"
                component={Login}
                options={{ 
                    title:"Iniciar Sesión",
                    headerLeft: null,
                    gestureEnabled: false
                }}
            />
            <Stack.Screen 
                name="register-stack"
                component={Register}
                options={{ title:"Registrar Usuario" }}
            />
        </Stack.Navigator>
    )
}

export default AccountStack
