import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


// compnents pour afficher  le travail fait de la'autre celui de Oyun.js 

export default function Titre({ children }) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        borderWidth: 2,
        borderColor: 'red',
        textAlign: 'center',
        padding: 15,
        marginBottom: 20,
        borderRadius: 20,
        color: 'white',
        fontSize: 20,

    },

})