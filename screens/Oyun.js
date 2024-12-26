import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Titre from '../components/Titre'
import ComputerSayi from '../components/ComputerSayi'


// et j'ai utilise curentGuess cme kle pr afficher le nbre guess ds la Oyun.js
// je fais la sme raison je lis le props ds cette partie 
export default function Oyun({ userNumber }) {
    // initial fait une estimation entre 1 et 100 tout evitant le nbre entre par 
    // user qui userNumber et generate j'ai mit exclude apres ce num le devine sera juste entre 1 et 100


    const initialGuess = generate(1, 200, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    function generate(min, max, exclude) {
        // Génère un nombre aléatoire entre min et max
        const randomNum = Math.floor(Math.random() * (max - min)) + min;

        if (randomNum === userNumber) {
            return generate(min, max, exclude)
        }
        else
            return randomNum
    }
    return (
        <View style={styles.container}>
            <Titre>Bilgisayar Tahmini</Titre>
            <View>

                <ComputerSayi>{currentGuess} </ComputerSayi>
                <Text>Altinda mi ustunde mi </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
})