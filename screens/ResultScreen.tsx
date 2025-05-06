import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 👉 Tüm sayfaları içeren Stack tipi:
type RootStackParamList = {
  Home: undefined;
  Story: undefined;
  Result: undefined;
};

// 👉 Bu ekranın navigation prop'u:
type ResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: ResultScreenNavigationProp;
};

export default function ResultScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>🎉 Hikaye Tamamlandı!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#f59e0b',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white' }}>Başa Dön</Text>
      </TouchableOpacity>
    </View>
  );
}
