import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Restaurants from '../screens/restaurants/Restaurants'
import AddRestaurant from '../screens/restaurants/AddRestaurant'
import Restaurant from '../screens/restaurants/Restaurant'
import AddReviewRestaurant from '../screens/restaurants/AddReviewRestaurant'

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
            <Stack.Screen
                name="restaurant-stack"
                component={Restaurant}
            />
            <Stack.Screen
                name="add-review-restaurant-stack"
                component={AddReviewRestaurant}
                options={{ title: "Nuevo Comentario" }}
            />
        </Stack.Navigator>
    )
}

export default RestaurantsStack
