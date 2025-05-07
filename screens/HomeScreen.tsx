import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import storyData from '../data/storyData.json';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Story: { story: any };
  Result: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Hikayeni Seç</Text>

      <FlatList
        data={storyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#dbeafe',
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
            }}
            onPress={() => navigation.navigate('Story', { story: item })}
          >
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#1e293b' }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
