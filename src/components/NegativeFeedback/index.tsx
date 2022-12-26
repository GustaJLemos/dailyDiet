import { Typography } from '@components/Typography';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Container, Illustration } from './styles';
import feedbackPng from '@assets/NegativeFeedbackIllustration.png'

export function NegativeFeedback() {
  const { COLORS: { brand } } = useTheme();

  return (
    <Container>
      <Typography fontSize='title_M' fontFamily='bold' style={{ color: brand.red.dark }}>
        Que pena!
      </Typography>

      <Typography fontColor='gray100' style={{ textAlign: 'center' }}>
        Você 
        <Typography fontFamily='bold'>
          {' '}saiu da dieta{' '}
        </Typography>
        dessa vez, mas continue se esforçando e não desista!
      </Typography>
      <Illustration
        source={feedbackPng}
      />
    </Container>
  );
}