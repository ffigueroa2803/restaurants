import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import ImagePicker  from 'react-native-image-crop-picker'

import { retrieveUrlPhoto, updateProfile, uploadImage } from '../../utils/actions'

const InfoUser = ({ user, setLoading, setLoadingText }) => {

    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)

    let options = {
        writeTempFile: true,
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7,
        smartAlbums:['PhotoStream', 'Generic', 'Panoramas', 'Videos', 'Favorites', 'Timelapses', 'AllHidden', 'RecentlyAdded', 'Bursts', 'SlomoVideos', 'UserLibrary', 'SelfPortraits', 'Screenshots', 'DepthEffect', 'LivePhotos', 'Animated', 'LongExposure']
    }

    const deleteTempPhoto = () => {
        ImagePicker.clean().then(() => {
            console.log('removed all tmp images from tmp directory');
        }).catch(e => {
            Alert.alert(e)
        })
    }

    const changePhoto = async() => {
        ImagePicker.openPicker(options)
        .then(async image => {
            setLoadingText("Actualizando imagen...")
            setLoading(true)

            const resultUploadImage = await uploadImage(image.path, "avatars", user.uid)

            if (!resultUploadImage.statusResponse) {
                setLoading(false)
                Alert.alert("Ha ocurrido un error al almacenar la foto del perfil")
                return
            }

            const resultUploadProfile = await updateProfile({ photoUrl: resultUploadImage.url })
            setLoading(false)

            if (resultUploadProfile.statusResponse) {
                setPhotoUrl(resultUploadImage.url)
            } else {
                Alert.alert("Ha ocurrido un error al actualizar la foto del perfil")
                return
            }
        }).catch(e => {
            deleteTempPhoto()
            console.log(e.message)
        })
    }

    const doRetrieveUrlPhoto = async(path, name) => {
        const result = await retrieveUrlPhoto(path, name)
        if (!result.statusResponse) { return }
        setPhotoUrl(result.url)
    }

    useEffect(() => {
        doRetrieveUrlPhoto("avatars", user.uid)
    }, [])

    return (
        <View style={styles.container}>
            <Avatar
                renderPlaceholderContent={<ActivityIndicator color="#fff"/>} 
                rounded
                onPress={changePhoto}
                size="large"
                source={ photoUrl ? { uri: photoUrl } : require("../../assets/avatar-default.jpg") }
            />
            <View style={styles.infoUser}>
                <Text style={styles.displayName}>
                    { user.displayName ? user.displayName : "Anónimo" }
                </Text>
                <Text>
                    { user && user.email || "No existe" }
                </Text>
            </View>
        </View>
    )
}

export default InfoUser

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        paddingVertical: 30
    },
    infoUser: {
        marginLeft: 20
    },
    displayName: {
        fontWeight: "bold",
        paddingBottom: 5
    }
})
