import React from 'react';
import { ContainerButtons, Content, DateAndTimeContainer } from './styles';

import { useTheme } from 'styled-components/native';
import { Typography } from '@components/Typography';
import { Alert, StatusBar, View } from 'react-native';
import { GoBackIcon } from '@components/GoBackIcon';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { MediumButton } from '@components/MediumButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Meal } from '@interfaces/Meal';
import uuid from 'react-native-uuid';
import { newMeal } from '@storage/newMeal';
import { applyMaskInText } from '@helpers/applyMaskInText';
import { AppError } from '@utils/AppError';

export function NewMeal() {
  const { COLORS } = useTheme();

  const [isOnADiet, setIsOnADiet] = useState<boolean>();

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  function verifyIfAllFieldsAreFilled() {
    if(name.trim().length === 0) {
      return Alert.alert('Nova refeição', 'Informe o nome da refeição')
    }
    if(description.trim().length === 0) {
      return Alert.alert('Nova refeição', 'Informe a descrição da refeição')
    }
    if(date.trim().length === 0) {
      return Alert.alert('Nova refeição', 'Informe a data da refeição')
    }
    if(hour.trim().length === 0) {
      return Alert.alert('Nova refeição', 'Informe a hora da refeição')
    }
    if(isOnADiet === undefined) {
      return Alert.alert('Nova refeição', 'Seleciona se faz ou não parte da dieta')
    }
    handleCreateNewMeal();
  }

  async function handleCreateNewMeal() {
    try {
      if(isOnADiet !== undefined) {  

        const meal: Meal = {
          name,
          date,
          hour,
          isOnADiet: isOnADiet,
          obs: description,
          id: String(uuid.v4()),
        }
  
        await newMeal(meal);
  
        navigation.navigate('NewMealFeedbackScreen', { isOnADiet: isOnADiet });
      }
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert(error.message)
      }
      Alert.alert('Não foi possível cadastrar a refeição', 'Por favor tente novamente')
    }
  }

  

  return (
    <>
      <Header 
        title='Nova refeição'
        backgroundColor={COLORS.base.gray500}
      />

      <Content>
        <Input value={name} onChangeText={setName} label='Nome' style={{ marginBottom: 24 }} />
        <Input 
          value={description} 
          onChangeText={setDescription} 
          label='Descrição' 
          multiline 
          textAlignVertical='top'
          style={{ height: 120, marginBottom: 24 }}
        />
        
        {/* TODO VALIDAR DATA E HORA VÁLIDAS */}
        <DateAndTimeContainer>
          <Input 
            value={date} 
            onChangeText={(text) => setDate(applyMaskInText({ text: text, type: 'date' }))} 
            label='Data' 
            keyboardType='decimal-pad'
            maxLength={10}
            style={{ width: 168 }}
          />
          <Input 
            value={hour} 
            onChangeText={(text) => setHour(applyMaskInText({ text: text, type: 'hour' }))} 
            label='Hora' 
            keyboardType='decimal-pad'
            maxLength={5}
            style={{ width: 168 }}
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
            onPress={verifyIfAllFieldsAreFilled}
            text='Cadastrar refeição'
          />
        </View>
      </Content>
    </>
  );
}