import React, { useEffect, useState, useCallback } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { size } from 'lodash'
import { useFocusEffect } from '@react-navigation/native'
import firebase from 'firebase/app'
import 'firebase/auth'

import Loading from '../../components/Loading'
import ListRestaurants from '../../components/restaurants/ListRestaurants'
import { getRestaurants } from '../../utils/actions'

const Restaurants = ({navigation}) => {

    let onEndReachedCalledDuringMomentum = false

    const [user, setUser] = useState(null)
    const [startRestaurant, setStartRestaurant] = useState(null)
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false)
    const [isMoreLoading, setIsMoreLoading] = useState(false)
    const [pagination, setPagination] = useState(false)

    const limitRestaurants = 7
    
    firebase.auth().onAuthStateChanged((userInfo) => {
        userInfo ? setUser(true) : setUser(false)
    })

    useFocusEffect(
        useCallback(() => {
            async function getData() {
                setLoading(true)
                const response = await getRestaurants(limitRestaurants, null, false)
                if (response.statusResponse) {
                    setStartRestaurant(response.startRestaurant)
                    setRestaurants(response.restaurants)
                    setPagination(true)
                }
                setLoading(false)
            }
            getData()
        }, [])
    )

    const handleLoadMore = async() => {
        setIsMoreLoading(true)
        const response = await getRestaurants(limitRestaurants, startRestaurant, pagination)
        if (response.statusResponse && pagination) {
            setStartRestaurant(response.startRestaurant)
            setRestaurants([...restaurants, ...response.restaurants])
        }
        setIsMoreLoading(false)
        onEndReachedCalledDuringMomentum = true
    }

    const renderFooter = () => {
        return (
          // Footer View with Loader
          <View style={styles.footer}>
            { isMoreLoading ? (
              <ActivityIndicator
                color="black"
                style={{margin: 15}} />
            ) : null }
          </View>
        )
    }

    if (user === null) {
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return (
        <View style={styles.viewBody}>
            {
                size(restaurants) > 0 ? (
                    <ListRestaurants
                        restaurants={restaurants}
                        navigation={navigation}
                        handleLoadMore={handleLoadMore}
                        renderFooter={renderFooter}
                        onEndReachedCalledDuringMomentum={onEndReachedCalledDuringMomentum}
                        isMoreLoading={isMoreLoading}
                    />
                ) : (
                    <View style={styles.notFoundView}>
                        <Text style={styles.notFoundText}>No hay restaurantes registrados.</Text>
                    </View>
                )
            }
            {
                user && (
                    <Icon
                        type="material-community"
                        name="plus"
                        color="#442484"
                        reverse
                        containerStyle={styles.btnContainer}
                        onPress={() => navigation.navigate("add-restaurant-stack")}
                    />
                )
            }
            <Loading isVisible={loading} text="Cargando restaurantes..."/>
        </View>
    )
}

export default Restaurants

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
    },
    btnContainer: {
        position: "absolute",
        bottom: 10,
        right: 10,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.5
    },
    notFoundView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    notFoundText: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
