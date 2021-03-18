import React from 'react'
import { StyleSheet } from 'react-native'
import { Overlay } from 'react-native-elements'

const Modal = ({isVisible, setVisible, children}) => {
    return (
        <Overlay
            isVisible={isVisible}
            overlayStyle={styles.overlay}
            onBackdropPress={() => setVisible(false)}
        >
            { children }
        </Overlay>
    )
}

export default Modal

const styles = StyleSheet.create({
    overlay: {
        width: "90%"
    }
})
