import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'



// Et puis la partie du clic est ajoute par pressed avec le style et tout 
export default function CustomBtn({ children, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                // en cliquant sur les deux pourqu'ils puisssent avoir des actions differentes
                // et j'ai cree une fonction ds chak partie in OyunBasla 

                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 5,
    },
    buttonInnerContainer: {
        paddingVertical: 8,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    pressed: {
        opacity: 0.5,
    },
})