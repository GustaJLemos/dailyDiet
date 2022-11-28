import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Container } from './styles';

export function Loading() {
  const { COLORS} = useTheme()

  return (
    <Container>
      <ActivityIndicator
        size='large'
        color={COLORS.brand.green.light }
      />
    </Container>
  );
}