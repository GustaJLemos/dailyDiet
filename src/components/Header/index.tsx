import React from 'react';
import { Image, View } from 'react-native';
import { Container } from './styles';
import LogoPng from '@assets/Logo.png'
import UserProfilePng from '@assets/UserProfile.png'

export function Header() {
  return (
    <Container>
      <Image 
        source={LogoPng}
      />
      <Image 
        source={UserProfilePng}
      />
    </Container>
  );
}