import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomBtn from '../components/CustomBtn'

export default function OyunBasla({ onPress }) {


    // voici les deux fonctions permettaant de faire silme ou kabul et kan il ya le clic 
    const resetHandler = () => {

    }

    const confirmHandler = () => {

    }
    return (
        <View style={styles.container}>
            <Text>OyunBasla</Text>
            <View style={styles.card}>
                <TextInput style={styles.input}
                    keyboardType='number-pad'
                    maxLength={2} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomBtn onPress={resetHandler}>Temizle</CustomBtn>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomBtn onPress={confirmHandler}>Onayla</CustomBtn>

                    </View>
                </View>


            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'yellow',
        width: 50,
        height: 50,
        marginVertical: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
