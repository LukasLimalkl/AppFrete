import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/componentes/form';
import Title from './src/componentes/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
  },
});
