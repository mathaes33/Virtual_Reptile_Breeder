import React from 'react';
import Navigation from './Navigation';

export default function App() {
  return <Navigation />;
}
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SnakeDetail" component={SnakeDetailScreen} options={{ title: 'Snake Details' }} />
        <Stack.Screen name="BreedingLab" component={BreedingLab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}