import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OyunBasla from './screens/OyunBasla';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(0,0,0,0.8)', 'transparent']}>
      <OyunBasla />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
