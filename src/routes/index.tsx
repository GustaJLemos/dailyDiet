import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoutes } from './app.routes';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

export function Routes() {
  const { COLORS: { base } } = useTheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: base.white}}>
      <StatusBar 
        backgroundColor={base.gray700}
        barStyle='dark-content'
      />
      <NavigationContainer>
          <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}