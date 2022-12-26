import { GoBackIcon } from '@components/GoBackIcon';
import { Typography } from '@components/Typography';
import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, ContentHeader } from './styles';

type Props = {
  title: string;
  backgroundColor: string;
}

export function Header({ title, backgroundColor }: Props) {
  const { COLORS } = useTheme();

  return (
    <>
      <StatusBar 
        backgroundColor={backgroundColor}
        barStyle='dark-content'
      />

      <Container
        backgroundColor={backgroundColor}
      >
        <ContentHeader>
          <GoBackIcon style={{ width: 24, height: 24 }} color={COLORS.base.gray200}/>             

          <Typography 
            fontColor='gray100' 
            fontFamily='bold' 
            fontSize='title_S'
            style={{ textAlign: 'center', width: '90%' }}
          >
            {title}
          </Typography>
        </ContentHeader>
      </Container>
    </>
  );
}