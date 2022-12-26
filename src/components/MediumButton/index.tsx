import { Typography } from '@components/Typography';
import React from 'react';
import { View } from 'react-native';
import { ButtonStyleProps, Container,  } from './styles';
import { useTheme } from 'styled-components';
import { Plus } from 'phosphor-react-native';
import { TouchableOpacityProps } from 'react-native';
import { Circle } from '@components/Circle';

type Props = ButtonStyleProps & TouchableOpacityProps & {
  text: string;
}

export function MediumButton({ type = 'green', text, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container type={type} {...rest}>
      {
        type === 'green' ? (
          <Circle size={8} color={COLORS.brand.green.dark}/>
        ) : (
          <Circle size={8} color={COLORS.brand.red.dark}/>
        )
      }
      <Typography 
        fontFamily='bold' 
        fontSize='body_S' 
        fontColor={'gray100'}
        style={{ marginLeft: 6 }}
      >
        {text}
      </Typography>
    </Container>
  );
}