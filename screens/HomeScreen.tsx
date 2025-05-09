import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storyData from '../data/storyData.json';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Story: { story: any; startSectionId?: string };
  Result: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    const checkHistory = async () => {
      const history = await AsyncStorage.getItem('storyHistory');
      if (history) {
        setHasHistory(true);
      }
    };
    checkHistory();
  }, []);

  const handleContinue = async () => {
    try {
      const history = await AsyncStorage.getItem('storyHistory');
      const parsed = history ? JSON.parse(history) : [];
  
      if (parsed.length > 0) {
        const lastEntry = parsed[parsed.length - 1];
  
        const story = storyData.find((s) => s.id === lastEntry.storyId);
  
        if (story) {
          navigation.navigate('Story', {
            story,
            startSectionId: lastEntry.sectionId,
          });
        } else {
          Alert.alert('Hata', 'Hikaye bulunamadı.');
        }
      }
    } catch (error) {
      Alert.alert('Hata', 'Geçmiş yüklenemedi.');
    }
  };
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 }}>
        <Text style={{
          fontSize: 26,
          fontWeight: 'bold',
          marginBottom: 24,
          color: '#0f172a',
          textAlign: 'center',
        }}>
          📚 Hikayeni Seç
        </Text>

        {hasHistory && (
          <TouchableOpacity
            style={{
              backgroundColor: '#dcfce7',
              paddingVertical: 14,
              paddingHorizontal: 32,
              borderRadius: 16,
              marginBottom: 24,
              width: 280,
            }}
            onPress={handleContinue}
          >
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#15803d', textAlign: 'center' }}>
              📌 Devam Et
            </Text>
          </TouchableOpacity>
        )}

        {storyData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              backgroundColor: '#e0f2fe',
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
              width: 280,
            }}
            onPress={() => navigation.navigate('Story', { story: item })}
          >
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#1e293b', textAlign: 'center' }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
