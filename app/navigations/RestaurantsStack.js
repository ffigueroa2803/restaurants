import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator()

const RestaurantsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="restaurants-stack"
                component={Restaurants}
                options={{ title:"Los mejores restaurantes" }}
            />
        </Stack.Navigator>
    )
}

export default RestaurantsStack
