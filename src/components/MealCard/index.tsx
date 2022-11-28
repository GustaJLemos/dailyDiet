import { Circle } from '@components/Circle';
import { Typography } from '@components/Typography';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Container, Separator } from './styles';

type Props = {
  date: string;
  text: string;
  isOnADiet: boolean;
}

export function MealCard({ date, text, isOnADiet }: Props) {
  const { COLORS: { brand } } = useTheme()

  return (
    <Container>
      <Typography fontSize='body_XS' fontFamily='bold' fontColor='gray100'>  
        {date}
      </Typography>

      <Separator />

      <Typography numberOfLines={1} style={{ flex: 1 }}>  
        {text}
      </Typography>

      <Circle 
        color={isOnADiet ? brand.green.mid : brand.red.mid}
      />
    </Container>    
  );
}