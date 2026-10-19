import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Interruptor from './components/Interruptor';
import Emoji from './components/Emoji';
import NomeUsuario from './components/NomeUsuario';
import OcultarSenha from './components/OcultarSenha';
import Curtidas from './components/Curtidas';

export default function App() {
  return (
    <View style={styles.container}>
      <Curtidas/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
