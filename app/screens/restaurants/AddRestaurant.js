import React, { useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import Toast from 'react-native-easy-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from '../../components/Loading'

import AddRestaurantForm from '../../components/restaurants/AddRestaurantForm'

const AddRestaurant = ({navigation}) => {

    const toastRef = useRef()
    const [loading, setLoading] = useState(false)

    return (
        <KeyboardAwareScrollView>
            <AddRestaurantForm 
                toastRef={toastRef} 
                setLoading={setLoading}
                navigation={navigation}
            />
            <Loading isVisible={loading} text="Creando restarutante..."/>
            <Toast ref={toastRef} position="center" opacity={0.9}/>
        </KeyboardAwareScrollView>
    )
}

export default AddRestaurant

const styles = StyleSheet.create({})
