import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { loadSnakes } from '../utils/storage';
import SnakeCard from '../components/SnakeCard';

export default function HomeScreen({ navigation }) {
  const [snakes, setSnakes] = useState([]);

  useEffect(() => {
    const fetchSnakes = async () => {
      try {
        const savedSnakes = await loadSnakes();
        setSnakes(savedSnakes || []);
      } catch (error) {
        console.error('Failed to load snakes:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', fetchSnakes);
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Snakes</Text>
      <FlatList
        data={snakes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SnakeCard snake={item} />}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No snakes yet. Visit the Breeding Lab!</Text>}
        windowSize={5}
        initialNumToRender={3}
      />
      <Button title="Go to Breeding Lab" onPress={() => navigation.navigate('BreedingLab')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
});