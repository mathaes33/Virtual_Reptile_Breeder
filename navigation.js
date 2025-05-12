import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SnakeDetail" component={SnakeDetailScreen} options={{ title: 'Snake Details' }} />
      <Stack.Screen name="BreedingLab" component={BreedingLab} />
    </Stack.Navigator>
  );
}