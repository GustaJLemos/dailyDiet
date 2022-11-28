import { Typography } from '@components/Typography';
import React from 'react';
import { View } from 'react-native';
import { ButtonStyleProps, Container,  } from './styles';
import { useTheme } from 'styled-components';
import { Plus } from 'phosphor-react-native';
import { TouchableOpacityProps } from 'react-native';

type Props = ButtonStyleProps & TouchableOpacityProps & {
  text: string;
  icon?: JSX.Element;
  showIcon?: boolean;
}

export function Button({ type = 'PRIMARY', icon, showIcon = true, text, ...rest }: Props) {
  const { COLORS: { base } } = useTheme()

  icon = <Plus size={22} color={base.white} weight='bold'/>

  return (
    <Container type={type} {...rest}>
      {showIcon && (
        icon
      )}
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