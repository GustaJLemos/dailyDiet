import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Icon } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

type Props = TouchableOpacityProps & {
  color: string
}

export function GoBackIcon({ color, ...rest }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Icon onPress={handleGoBack} hitSlop={{
      bottom: 40,
      left: 40,
      right: 40,
      top: 40,
    }} {...rest}>
      <AntDesign name="arrowleft" size={24} color={color} />
    </Icon>
  );
}