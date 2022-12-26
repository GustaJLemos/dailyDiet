import { Typography } from '@components/Typography';
import React from 'react';
import { Container } from './styles';


type Props = {
  message: string;
}

export function ListEmptyComponent({ message }: Props) {
  return (
    <Container>
      <Typography style={{ textAlign: 'center' }} fontColor='gray400' fontFamily='bold'>
        {message}
      </Typography>
    </Container>
  );
}