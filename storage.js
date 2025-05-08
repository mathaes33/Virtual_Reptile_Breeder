import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'snake_list';

export const saveSnakes = async (snakes) => {
  try {
    const jsonValue = JSON.stringify(snakes);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to save snakes:', e);
  }
};

export const loadSnakes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load snakes:', e);
    return [];
  }
};