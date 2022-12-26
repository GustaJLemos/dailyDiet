import { Typography } from '@components/Typography';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Container, Illustration } from './styles';
import feedbackPng from '@assets/PositiveFeedbackIllustration.png'


export function PositiveFeedback() {
  const { COLORS: { brand } } = useTheme();

  return (
    <Container>
      <Typography fontSize='title_M' fontFamily='bold' style={{ color: brand.green.dark }}>
        Continue assim!
      </Typography>

      <Typography fontColor='gray100' style={{ textAlign: 'center' }}>
        Você continua 
        <Typography fontFamily='bold'>
          {' '}dentro da dieta.{' '}
        </Typography>
        Muito bem!
      </Typography>
      <Illustration
        source={feedbackPng}
      />
    </Container>
  );
}