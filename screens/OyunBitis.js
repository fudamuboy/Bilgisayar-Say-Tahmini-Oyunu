import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Titre from '../components/Titre';
import CustomBtn from '../components/CustomBtn';

export default function OyunBitis({ roundsNumber, userNumber }) {
    return (
        <View style={styles.container}>
            <Titre style={styles.title}>Game is Done !</Titre>

            <View style={styles.imgView}>
                <Image source={require('./../assets/basaril.jpg')} />

            </View>
            <Text style={styles.result}>
                <Text style={styles.number}> {roundsNumber}</Text> denemeyle
                <Text style={styles.number}> {userNumber} </Text> gon be finding
            </Text>
            <CustomBtn>Start new game </CustomBtn>
        </View>
    )
}
// maintenant combien tu as fais l'essayage et puis la valeur pour cela
//  je vais declarer deux props et sender vers app.js 

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
    },
    imgView: {
        width: 390,
        height: 390,
        overflow: 'hidden',
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'red',
        margin: 40,

    },
    img: {
        width: '100%',
        height: '100%',
    },
    result: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
    },
    number: {
        color: 'red',
    },
});