import React from 'react';
import { TextProps } from 'react-native';

import { Container, StyledFontColorProps, StyledFontFamilyProps, StyledFontSizeProps } from './styles';

type Props = TextProps & {
  fontSize?: StyledFontSizeProps;
  fontFamily?: StyledFontFamilyProps;
  fontColor?: StyledFontColorProps;
}

export function Typography({ 
  fontSize = 'body_M', 
  fontFamily = 'regular', 
  fontColor = 'gray200', 
  ...rest 
}: Props) {
  return (
    <Container 
      fontSize={fontSize} 
      fontFamily={fontFamily} 
      fontColor={fontColor} 
      {...rest}
    />    
  );
}