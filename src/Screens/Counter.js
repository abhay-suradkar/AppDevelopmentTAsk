import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter App</Text>

      <Text style={styles.counterText}>Counter: {count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a90e2',
  },
  counterText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
