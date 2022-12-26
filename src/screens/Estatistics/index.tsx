import { MealEstatistics } from '@components/MealEstatistics';
import { Typography } from '@components/Typography';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';
import { Content, Header } from './styles'
import { GoBackIcon } from '@components/GoBackIcon';
import { useRoute } from '@react-navigation/native';
import { MealEstatistics as EstatisticsInterface } from '@interfaces/MealEstatistics';

type RouteParams = {
  estatistics: EstatisticsInterface;
}

export function Estatistics() {
  const { COLORS } = useTheme();

  const { params } = useRoute();

  const { estatistics } = params as RouteParams;

  return (
    <>
      <StatusBar 
        backgroundColor={estatistics.mealsIsOnADiet >= 50 ? COLORS.brand.green.mid : COLORS.brand.red.mid}
        barStyle='dark-content'
      />
      <>
        <Header
          isOnADiet={estatistics.mealsIsOnADiet >= 50}
        >
          <GoBackIcon color={estatistics.mealsIsOnADiet >= 50 ? COLORS.brand.green.dark : COLORS.brand.red.dark}/>
          <Typography 
            fontSize="title_G" 
            fontFamily="bold" 
            style={{ textAlign: 'center' }}
          >
            {estatistics.mealsIsOnADiet}%
          </Typography>
          <Typography 
            fontSize="body_S"
            style={{ textAlign: 'center' }}
          >
            das refeições dentro da dieta
          </Typography>
        </Header>

        <Content>
          <Typography 
            fontSize="title_XS"
            fontFamily='bold'
            fontColor='gray100'
            style={{ textAlign: 'center', marginBottom: 32 }}
          >
            Estatísticas gerais
          </Typography>
          <MealEstatistics 
            title={String(estatistics.sequenceOfMealsWithinDiet)}
            subtitle='melhor sequência de pratos dentro da dieta'
            showIcon={false}
            style={{
              backgroundColor: COLORS.base.gray600,
              marginBottom: 12
            }}
          />
          <MealEstatistics 
            title={String(estatistics.mealTotal)}
            subtitle='refeições registradas'
            showIcon={false}
            style={{
              backgroundColor: COLORS.base.gray600,
              marginBottom: 12
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <MealEstatistics 
              title={String(estatistics.mealsOnDiet)}
              subtitle='refeições dentro da dieta'
              showIcon={false}
              isOnADiet={true}
              style={{
                marginRight: 12
              }}
            />
            <MealEstatistics 
              title={String(estatistics.mealsOffDiet)}
              subtitle='refeições fora da dieta'
              showIcon={false}
              isOnADiet={false}
            />
          </View>
        </Content>
      </>
    </>
  );
}