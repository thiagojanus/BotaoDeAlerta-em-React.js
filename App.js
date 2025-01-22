import React from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet } from 'react-native';

const showAlert1 = () => {
  Alert.alert('resposta: "Porque tinha muitos problemas.!');
};

const showAlert2 = () => {
  Alert.alert('Que cinto maneiro!');
};

const showAlert3 = () => {
  Alert.alert('Porque não tinha estômago para isso.');
};

const showAlert4 = () => {
  Alert.alert('Vem Quá!');
};

const App = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Gerador de Piadas</Text>
      <TouchableOpacity style={styles.button} onPress={showAlert1}>
        <Text style={styles.buttonText}>Por que o livro de matemática ficou triste?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showAlert2}>
        <Text style={styles.buttonText}>O que o zero disse para o oito?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showAlert3}>
        <Text style={styles.buttonText}>Por que o esqueleto não brigou com ninguém?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showAlert4}>
        <Text style={styles.buttonText}>O que o pato disse para a pata?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
  },
  button: {
    backgroundColor: '#191970',
    padding: 10,
    borderRadius: 15,
    width: 230,
    margin: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
    top: 140,
  }
});

export default App;  // Adicione esta linha no final do arquivo