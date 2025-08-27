import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
   contador > 0 && setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.counterText}>{contador}</Text>
      <View style={styles.buttonContainer}>

        
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText} >-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text  style={styles.buttonText}>+1</Text>
        </TouchableOpacity>

      </View>
        <TouchableOpacity style={[styles.zerar, styles.resetButton]} onPress={handleReset}>
          <Text style={styles.buttonText} >zerar</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C68EFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:"#fff",
    fontSize:32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counterText:{
    fontSize:64,
    fontWeight: "bold",
    color: "#fff",
    marginBottom:30
  },
  button:{
    backgroundColor: "#69247C",
    paddingVertical: 35,
    paddingHorizontal: 80,
    borderRadius: 20,
  },
  zerar:{
    backgroundColor: "#6A0066",
    paddingVertical: 50,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  buttonText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer:{
    flexDirection: "row",
    marginBottom: 20,
    gap: 6,
  },
  resetButton:{
    backgroundColor: "#AA60C8",
    
  }
})


