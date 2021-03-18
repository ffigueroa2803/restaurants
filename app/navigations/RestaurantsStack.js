import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Restaurants from '../screens/restaurants/Restaurants'
import AddRestaurant from '../screens/restaurants/AddRestaurant'

const Stack = createStackNavigator()

const RestaurantsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="restaurants-stack"
                component={Restaurants}
                options={{ title:"Los mejores restaurantes" }}
            />
            <Stack.Screen 
                name="add-restaurant-stack"
                component={AddRestaurant}
                options={{ title:"Crear restaurante" }}
            />
        </Stack.Navigator>
    )
}

export default RestaurantsStack
