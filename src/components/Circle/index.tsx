import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { CircleStyleProps, Container } from './styles';

type Props = CircleStyleProps & {
}

export function Circle({ size = 14, color }: Props) {
  const { COLORS: { brand } } = useTheme();

  return (
    <Container
      size={size}
      color={color}
    />
  );
}