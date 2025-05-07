import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

type RootStackParamList = {
  Home: undefined;
  Story: { story: any };
  Result: undefined;
};

type StoryRouteProp = RouteProp<RootStackParamList, 'Story'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Story'>;

export default function StoryScreen() {
  const route = useRoute<StoryRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { story } = route.params;

  const [currentSectionId, setCurrentSectionId] = useState('1');

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

  const handleChoice = (nextId: string) => {
    setCurrentSectionId(nextId);
  };

  const handleFinish = () => {
    navigation.navigate('Result');
  };

  if (!currentSection) return null;

  return (
    <StyledView className="flex-1 bg-white p-5 justify-center">
      <StyledText className="text-xl font-bold mb-6">{currentSection.text}</StyledText>

      {currentSection.choices.map((choice: any, index: number) => (
        <StyledButton
          key={index}
          className="bg-blue-500 p-4 rounded-xl mb-4"
          onPress={() => handleChoice(choice.nextSectionId)}
        >
          <StyledText className="text-white text-center text-lg font-medium">
            {choice.text}
          </StyledText>
        </StyledButton>
      ))}

      {/* Bitir Butonu */}
      <StyledButton
        className="bg-orange-500 p-4 rounded-xl mt-6"
        onPress={handleFinish}
      >
        <StyledText className="text-white text-center text-lg font-medium">
          Bitir
        </StyledText>
      </StyledButton>
    </StyledView>
  );
}
