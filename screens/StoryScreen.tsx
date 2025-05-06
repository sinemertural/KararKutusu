import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Story: undefined;
  Result: undefined;
};

type StoryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Story'>;

type Props = {
  navigation: StoryScreenNavigationProp;
};

export default function StoryScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Hikaye Bölümü</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Result')}
        style={{
          backgroundColor: '#10b981',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white' }}>Bir Seçim Yap</Text>
      </TouchableOpacity>
    </View>
  );
}
