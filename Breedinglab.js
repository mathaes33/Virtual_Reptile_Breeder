import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { generateSnake } from '../utils/snakeDNA';
import { loadSnakes, saveSnakes } from '../utils/storage';

export default function BreedingLab({ navigation }) {
  const handleBreed = async () => {
    try {
      const newSnake = generateSnake();
      const currentSnakes = await loadSnakes();
      const updatedSnakes = [...currentSnakes, newSnake];
      await saveSnakes(updatedSnakes);
      navigation.navigate('SnakeDetail', { snake: newSnake });
    } catch (error) {
      console.error('Error breeding snake:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breeding Lab</Text>
      <Button title="Breed a New Snake" onPress={handleBreed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0ffe0' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});