import { Button } from '@components/Button';
import { NegativeFeedback } from '@components/NegativeFeedback';
import { PositiveFeedback } from '@components/PositiveFeedback';
import { Typography } from '@components/Typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Container } from './styles';

type RouteParams = {
  isOnADiet: boolean;
}

export function NewMealFeedback() {
  const { params } = useRoute();

  const { isOnADiet } = params as RouteParams;

  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('HomeScreen');
  }

  return (
    <Container>
      {isOnADiet ? <PositiveFeedback /> : <NegativeFeedback />}
      <Button 
        text='Ir para a página inicial'
        onPress={handleBackToHome}
      />
    </Container>
  );
}