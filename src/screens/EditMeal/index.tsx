import React, { useEffect } from 'react';

import { useTheme } from 'styled-components/native';
import { Typography } from '@components/Typography';
import { Alert, View } from 'react-native';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { MediumButton } from '@components/MediumButton';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '@components/Header';
import { ContainerButtons, Content, DateAndTimeContainer } from './styles';
import { Meal } from '@interfaces/Meal';
import { AppError } from '@utils/AppError';
import { editMeal as storageEditMeal } from '@storage/editMeal'

type RouteParams = {
  meal: Meal;
}

export function EditMeal() {
  const { COLORS } = useTheme();

  const navigation = useNavigation();
  
  const { params } = useRoute();
  
  const { meal } = params as RouteParams;

  const [isOnADiet, setIsOnADiet] = useState<boolean>(meal.isOnADiet);

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.obs);
  const [date, setDate] = useState(meal.date);
  const [hour, setHour] = useState(meal.hour);

  async function handleSaveTheNewsChanges() {
    try {
      await storageEditMeal({
        name: name,
        obs: description,
        date: date,
        hour: hour,
        id: meal.id,
        isOnADiet: isOnADiet
      })
      navigation.navigate('HomeScreen');
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Edição de refeição', `${error.message}`)
      }
      Alert.alert('Edição de refeição', 'Não foi possível editar a refeição')
    }
  }

  return (
    <>
      <Header 
        title='Editar refeição'
        backgroundColor={COLORS.base.gray500}
      />

      <Content>
        <Input 
          label='Nome' style={{ marginBottom: 24 }} 
          value={name}
          onChangeText={setName}
        />
        <Input 
          label='Descrição' 
          multiline 
          textAlignVertical='top'
          style={{ height: 120, marginBottom: 24, paddingTop: 12 }}
          value={description}
          onChangeText={setDescription}
        />
        
        {/* TODO fazer função para separar data e hora */}
        <DateAndTimeContainer>
          <Input 
            label='Data' 
            style={{ width: 168 }}
            value={date}
            onChangeText={setDate}
          />
          <Input 
            label='Hora' 
            style={{ width: 168 }}
            value={hour}
            onChangeText={setHour}
          />
        </DateAndTimeContainer>

        <Typography
          fontColor='gray200'
          fontFamily='bold'
          fontSize='title_XS'
        >
          Está dentro da dieta?
        </Typography>
        <ContainerButtons>
          <MediumButton 
            selected={isOnADiet === true} 
            type='green' 
            text='Sim'
            onPress={() => setIsOnADiet(true)}
          />
          <MediumButton 
            selected={isOnADiet === false}  
            type='red' 
            text='Não'
            onPress={() => setIsOnADiet(false)}
          />
        </ContainerButtons>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button 
            onPress={handleSaveTheNewsChanges}
            text='Salvar alterações'
          />
        </View>
      </Content>
    </>
  );
}