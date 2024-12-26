import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import { useState } from 'react'
import OyunBasla from './screens/OyunBasla';
import Oyun from './screens/Oyun';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [userNumber, setUserNumber] = useState('');

  const sendedNumHandler = (gonderdigiSayi) => {
    setUserNumber(gonderdigiSayi);
  };

  // Définir la variable `screens` ici, basée sur l'état `userNumber`.
  let screens = <OyunBasla onSendNumber={sendedNumHandler} />;

  // j'ai lie un props a ce nom pour l'envoyer vers OyunBasla car bilgisyar tahmini yaparken lazimdir
  if (userNumber) {
    screens = <Oyun userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(0,0,0,0.8)', 'transparent']}>

      <ImageBackground
        style={styles.container}
        source={require('./assets/backimg.jpg')}
        imageStyle={styles.img}
      >
        {screens}
      </ImageBackground>

    </LinearGradient>
  );
}
// ds cette partie j'ai  ajoute ImageStyle ki est une properti pr rendre img flou derniere somthing 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    opacity: 0.2,
  }
});
