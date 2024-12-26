import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerSayi({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'yellow',
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,


    },
    text: {
        fontSize: 20,
        color: 'yellow',
    },
})