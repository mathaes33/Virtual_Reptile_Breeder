import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SnakeDetailScreen from './screens/SnakeDetailScreen';
import BreedingLab from './screens/BreedingLab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SnakeDetail" component={SnakeDetailScreen} options={{ title: 'Snake Details' }} />
        <Stack.Screen name="BreedingLab" component={BreedingLab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}