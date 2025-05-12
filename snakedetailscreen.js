import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SnakeDetailScreen({ route }) {
  const { snake } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Snake Details</Text>
      <Text>Name: {snake.name}</Text>
      <Text>Species: {snake.species}</Text>
      <Text>Pattern: {snake.pattern}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ffd' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});