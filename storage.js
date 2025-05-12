import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadSnakes = async () => {
  try {
    const data = await AsyncStorage.getItem('snakes');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load snakes:', error);
    return [];
  }
};

export const saveSnakes = async (snakes) => {
  try {
    await AsyncStorage.setItem('snakes', JSON.stringify(snakes));
  } catch (error) {
    console.error('Failed to save snakes:', error);
  }
};