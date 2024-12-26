import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import CustomBtn from '../components/CustomBtn'
import Titre from '../components/Titre'

export default function OyunBasla({ onPress, onSendNumber }) {
    const [entered, setEntered] = useState('')

    // il faut savoir il ya  'Alert' du React Ntive  eet celui de js 'alert' ve A=chosenNumber olarak aldim
    // voici les deux fonctions permettaant de faire silme ou kabul et kan il ya le clic 
    const TemizleHandler = () => {
        setEntered('')
    }

    const OnaylaHandler = () => {
        const A = parseInt(entered)
        if (isNaN(A) || A <= 0 || A > 99) {
            Alert.alert('Gecersiz sayi', 'Sayi 1 ile 99 arasi olmalidir',
                [{ text: 'Tamam', style: 'default ', onPress: numberEntered }])
            return
        }
        onSendNumber(A)
    }
    const numberEntered = (text) => {
        // console.log(text);
        setEntered(text)


    }

    return (
        <View style={styles.container}>
            <Titre>Bilgisayar Sayi bulmaca Oyunu </Titre>
            <View style={styles.card}>
                <TextInput style={styles.input}
                    keyboardType='number-pad'
                    maxLength={2}
                    value={entered}
                    onChangeText={(text) => numberEntered(text)} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomBtn onPress={TemizleHandler}>Temizle</CustomBtn>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomBtn onPress={OnaylaHandler}>Onayla</CustomBtn>

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
