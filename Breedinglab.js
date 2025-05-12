{import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { generateSnake } from '../utils/snakeDNA';
import { loadSnakes, saveSnakes } from '../utils/storage';

const handleBreed = async () => {
  const newSnake = generateSnake();
  const current = await loadSnakes();
  const updated = [...current, newSnake];
  await saveSnakes(updated);
  navigation.navigate('SnakeDetail', { snake: newSnake });
};
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breeding Lab</Text>
      <Button title="Breed a New Snake" onPress={handleBreed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffe0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});