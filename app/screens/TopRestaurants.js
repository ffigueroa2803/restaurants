import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Loading from '../components/Loading'
import ListTopRestaurants from '../components/ranking/ListTopRestaurants'
import { getTopRestaurants } from '../utils/actions'

const TopRestaurants = ({ navigation }) => {
    const [restaurants, setRestaurants] = useState(null)
    const [loading, setLoading] = useState(false)

    useFocusEffect(
        useCallback(() => {
            async function getData() {
                setLoading(true)
                const response = await getTopRestaurants(10)
                if (response.statusResponse) {
                    setRestaurants(response.restaurants)
                }
                setLoading(false)
            }
            getData()
        }, [])
    )

    return (
        <View>
            <ListTopRestaurants
                restaurants={restaurants}
                navigation={navigation}
            />
            <Loading isVisible={loading} text="Por favor espere..."/>
        </View>
    )
}

export default TopRestaurants

const styles = StyleSheet.create({})
