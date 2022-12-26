import { Button } from '@components/Button';
import { Circle } from '@components/Circle';
import { Header } from '@components/Header';
import { Typography } from '@components/Typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Content, IsOnADiet } from './styles';
import { PencilLine, Trash } from 'phosphor-react-native';
import { Alert, View } from 'react-native';
import { Meal } from '@interfaces/Meal';
import { AlertBox } from '@components/AlertBox';
import { excludeMeal } from '@storage/excludeMeal';

type RouteParam = {
  meal: Meal;
}

export function MealDetails() {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const { params } = useRoute();

  const { meal } = params as RouteParam;

  const [isModalVisible, setIsModalVisible] = useState(false);

  async function handleExcludeTheMeal() {
    try {
      await excludeMeal(meal)
      setIsModalVisible(false)
      navigation.navigate('HomeScreen')
    } catch {
      Alert.alert('Exluir refeição', 'Não foi possível excluir a refeição selecionada')
    }
  }

  return (
    <>
      <Header
        title='Refeição'
        backgroundColor={meal.isOnADiet ? COLORS.brand.green.light : COLORS.brand.red.light}
      />

      <Content>
        <Typography
          fontSize='title_S'
          fontColor='gray100'
          fontFamily='bold'
        >
          {meal.name}
        </Typography>
        <Typography
          fontSize='body_M'
          fontColor='gray200'
          fontFamily='regular'
          style={{ marginBottom: 24 }}
        >
          {meal.obs}
        </Typography>

        <Typography
          fontSize='title_XS'
          fontColor='gray100'
          fontFamily='bold'
        >
          Data e hora
        </Typography>
        <Typography
          fontSize='body_M'
          fontColor='gray200'
          fontFamily='regular'
          style={{ marginBottom: 24 }}
        >
          {meal.date} às {meal.hour}
        </Typography>
        
        <IsOnADiet>
          <Circle
            size={8}
            color={meal.isOnADiet ? COLORS.brand.green.dark : COLORS.brand.red.dark}
            
          />
          <Typography
            fontSize='body_S'
            fontColor='gray100'
            fontFamily='regular'
            style={{ marginLeft: 8 }}
          >
            {meal.isOnADiet ? 'dentro da dieta' : 'fora da dieta'}
          </Typography>
        </IsOnADiet>

        <View style={{ justifyContent: 'flex-end', flex: 1 }}>
          <Button
            text='Editar refeição'
            icon={<PencilLine size={22}  color={COLORS.base.white}/>}
            onPress={() => navigation.navigate('EditMealScreen', { meal: meal })}
            style={{ marginBottom: 12 }}
          />

          <Button
            text='Excluir refeição'
            icon={<Trash size={22} color={COLORS.base.gray100}/>}
            type={'SECONDARY'}
            onPress={() => setIsModalVisible(true)}
          />  
        </View>   
      </Content>
      <AlertBox 
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onConfirm={() => handleExcludeTheMeal()}
      />
    </>
  );
}