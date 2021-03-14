import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

const Loading = ({isVisible, text}) => {
    return (
        <Overlay 
            isVisible={isVisible}
            windowBackgroundColor="rgb(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >
            <View style={styles.view}>
                <ActivityIndicator size="small" color="#442484" />
                { text && (<Text style={styles.text}>{text}</Text>) }
            </View>
        </Overlay>
    )
}

export default Loading

const styles = StyleSheet.create({
    overlay:{
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#442484",
        borderWidth: 2,
        borderRadius: 10
    },
    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color: "#442484",
        marginTop: 10
    }
})
