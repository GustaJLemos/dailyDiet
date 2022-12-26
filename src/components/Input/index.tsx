import { Typography } from '@components/Typography';
import React from 'react';
import { TextInputProps, View } from 'react-native';
import { Container, InputContainer } from './styles';

type Props = TextInputProps & {
  label: string;
}

export function Input({ label, ...rest }: Props) {

  // TODO fazer filtros de data e hora para formatar o texto
  return (
    <View style={{ flexDirection: 'column' }}>
      <Typography
        fontColor='gray200'
        fontFamily='bold'
        fontSize='title_XS'
      >
        {label}
      </Typography>
      <InputContainer {...rest} style={rest.style}/>
    </View>
  );
}