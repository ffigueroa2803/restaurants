import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
import { formatPhone } from '../../utils/helpers'

import { size } from 'lodash'

const ListRestaurants = ({ restaurants, navigation, handleLoadMore, renderFooter, onEndReachedCalledDuringMomentum, isMoreLoading }) => {

    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        )
    }

    return (
        <View>
            <FlatList
                data={restaurants}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={(restaurant) => (
                    <Restaurant 
                        restaurant={restaurant} 
                        navigation={navigation}
                    />
                )}
                onEndReached={() => {
                    if (!onEndReachedCalledDuringMomentum && !isMoreLoading) {
                        handleLoadMore()
                    }
                }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum = false}}
            />
        </View>
    )
}

const Restaurant = ({ restaurant, navigation }) => {
    const { id, images, name, address, description, phone, callingCode } = restaurant.item
    const imageRestaurant = images[0]

    const goRestaurtant = () => {
        navigation.navigate("restaurant-stack", { id, name })
    } 

    return (
        <TouchableOpacity onPress={goRestaurtant}>
            <View style={styles.viewRestaurant}>
                <View style={styles.viewRestaurantImage}>
                    <Image
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator color="#fff"/>}
                        source={{ uri: imageRestaurant }}
                        style={styles.imageRestaurant}
                    />
                </View>
                <View>
                    <Text style={styles.restaurantTitle}>{name}</Text>
                    <Text style={styles.restaurantInformation}>{address}</Text>
                    <Text style={styles.restaurantInformation}>{formatPhone(callingCode, phone)}</Text>
                    <Text style={styles.restaurantDescription}>
                        {
                            size(description) > 60
                                ? `${description.substr(0, 60)}...`
                                : description
                        }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListRestaurants

const styles = StyleSheet.create({
    viewRestaurant: {
        flexDirection: "row",
        margin: 10
    },
    viewRestaurantImage: {
        marginRight: 15
    },
    imageRestaurant: {
        width: 90,
        height: 90
    },
    restaurantTitle: {
        fontWeight: "bold"
    },
    restaurantInformation: {
        paddingTop: 2,
        color: "grey"
    },
    restaurantDescription: {
        paddingTop: 2,
        color: "grey",
        width: "75%"
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})
