import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styled } from 'nativewind';

type RootStackParamList = {
  Home: undefined;
  Story: undefined;
  Result: undefined;
};

type ResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: ResultScreenNavigationProp;
};

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

export default function ResultScreen({ navigation }: Props) {
  return (
    <StyledView className="flex-1 bg-white justify-center items-center px-6">
      <StyledText className="text-3xl font-bold text-center text-green-700 mb-4">
        🎉 Hikaye Tamamlandı!
      </StyledText>
      <StyledText className="text-base text-gray-600 text-center mb-8">
        Kararların seni buraya getirdi. Yeni bir hikayeye başlamak ister misin?
      </StyledText>

      <StyledButton
        onPress={() => navigation.navigate('Home')}
        className="bg-amber-500 px-6 py-3 rounded-full shadow-md active:opacity-80"
      >
        <StyledText className="text-white text-lg font-semibold">🔁 Başa Dön</StyledText>
      </StyledButton>
    </StyledView>
  );
}
