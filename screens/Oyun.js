import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Titre from '../components/Titre'
import ComputerSayi from '../components/ComputerSayi'
import CustomBtn from '../components/CustomBtn'





let minNum = 1
let maxNum = 100

// le currentGuess est le nbbre de deinette de l'ordi
// et j'ai utilise curentGuess cme kle pr afficher le nbre guess ds la Oyun.js
// je fais la sme raison je lis le props ds cette partie 
export default function Oyun({ userNumber, onGaveOver }) {
    // initial fait une estimation entre 1 et 100 tout evitant le nbre entre par 
    // user qui userNumber et generate j'ai mit exclude apres ce num le devine sera juste entre 1 et 100

    const initialGuess = generateNum(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGaveOver(); // Si l'ordinateur devine le nombre, le jeu se termine
        }
    }, [currentGuess, userNumber, onGaveOver]);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Hdi ordan', 'Yanlis oldugunu bile bile basion',
                [{ text: 'Tamam', style: 'cancel' }]
            )
            return;
        }

        if (direction === 'lower') {
            maxNum = currentGuess; // Ajuster minNum correctement
        } else {
            minNum = currentGuess + 1;// Ajuster maxNum correctement
        }
        const newRandomNum = generateNum(minNum, maxNum, currentGuess);
        setCurrentGuess(newRandomNum);
    }


    function generateNum(min, max, exclude) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;

        if (randomNumber === exclude) {
            return randomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    }



    return (
        <View style={styles.container}>
            <Titre>Bilgisayar Tahmini</Titre>
            <View>

                <ComputerSayi>{currentGuess} </ComputerSayi>
                <Text>Altinda mi ustunde mi </Text>
                <View style={styles.btnContainer}>
                    <CustomBtn onPress={nextGuessHandler.bind(this, 'lower')}>
                        -
                    </CustomBtn>
                    <CustomBtn onPress={nextGuessHandler.bind(this, 'greater')}>
                        +
                    </CustomBtn>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
    }
})