import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addChoice } from '../redux/historySlice';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

type RootStackParamList = {
  Home: undefined;
  Story: { story: any; startSectionId?: string };
  Result: undefined;
};

type StoryRouteProp = RouteProp<RootStackParamList, 'Story'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Story'>;

export default function StoryScreen() {
  const route = useRoute<StoryRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { story, startSectionId } = route.params;
  const [currentSectionId, setCurrentSectionId] = useState(startSectionId || '1');
  const dispatch = useDispatch();

  const currentSection = story.sections.find(
    (section: any) => section.id === currentSectionId
  );

  useEffect(() => {
    if (currentSection && currentSection.choices.length === 0) {
      const timer = setTimeout(() => {
        navigation.navigate('Result');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentSection, navigation]);

  const saveChoiceToHistory = async (sectionId: string, choiceText: string) => {
    try {
      dispatch(addChoice({ sectionId, choiceText }));
      const history = await AsyncStorage.getItem('storyHistory');
      const parsed = history ? JSON.parse(history) : [];
  
      const updated = [
        ...parsed,
        {
          sectionId,
          choiceText,
          storyId: story.id // ✅ hikaye ID'sini de kaydediyoruz
        }
      ];
  
      await AsyncStorage.setItem('storyHistory', JSON.stringify(updated));
    } catch (error) {
      console.error("Geçmiş kaydedilemedi:", error);
    }
  };
  

  const handleChoice = (nextId: string, choiceText: string) => {
    saveChoiceToHistory(currentSectionId, choiceText);
    setCurrentSectionId(nextId);
  };

  if (!currentSection) return null;

  return (
    <StyledView className="flex-1 bg-gray-50 px-6 py-10">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <StyledText className="text-2xl font-semibold text-gray-800 mb-8 text-center leading-relaxed">
          {currentSection.text}
        </StyledText>

        {currentSection.choices.map((choice: any, index: number) => (
          <StyledButton
            key={index}
            className="bg-blue-600 rounded-2xl py-4 px-5 mb-4 shadow-md active:opacity-80"
            onPress={() => handleChoice(choice.nextSectionId, choice.text)}
          >
            <StyledText className="text-white text-lg text-center font-medium">
              {choice.text}
            </StyledText>
          </StyledButton>
        ))}

        {/* Hikaye bittiğinde manuel bitirme butonu */}
        {currentSection.choices.length === 0 && (
          <StyledButton
            className="bg-green-600 rounded-2xl py-4 px-5 mt-6 shadow-lg"
            onPress={() => navigation.navigate('Result')}
          >
            <StyledText className="text-white text-lg text-center font-semibold">
              🎉 Bitir ve Sonucu Gör
            </StyledText>
          </StyledButton>
        )}
      </ScrollView>
    </StyledView>
  );
}
