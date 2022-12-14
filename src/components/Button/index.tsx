import { Typography } from '@components/Typography';
import React from 'react';
import { View } from 'react-native';
import { ButtonStyleProps, Container,  } from './styles';
import { useTheme } from 'styled-components';
import { TouchableOpacityProps } from 'react-native';

type Props = ButtonStyleProps & TouchableOpacityProps & {
  text: string;
  icon?: JSX.Element;
}

export function Button({ type = 'PRIMARY', icon, text, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon}
      <Typography 
        fontFamily='bold' 
        fontSize='body_S' 
        fontColor={type === 'PRIMARY' ? 'white' : 'gray100' }
        style={{ marginLeft: 12 }}
      >
        {text}
      </Typography>
    </Container>
  );
}