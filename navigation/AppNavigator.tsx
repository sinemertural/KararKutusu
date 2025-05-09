import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';
import ResultScreen from '../screens/ResultScreen';

export type RootStackParamList = {
  Home: undefined;
  Story: { story: any; startSectionId?: string };
  Result: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#3b82f6' }, 
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa'}}/>
        <Stack.Screen name="Story" component={StoryScreen} options={{ title: 'Hikaye' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Sonuç' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}