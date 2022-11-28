import React from 'react';
import { SectionList, StatusBar, View } from 'react-native';
import { Container } from './styles';
import { useTheme } from 'styled-components/native'
import { Header } from '@components/Header';
import { MealEstatistics } from '@components/MealEstatistics';
import { Typography } from '@components/Typography';
import { Button } from '@components/Button';
import { Plus } from 'phosphor-react-native';
import { MealCard } from '@components/MealCard';

type Example = {
  title: string;
  data: string[];
  isOnADiet: boolean;
}

const Data: Example[] = [
  {
    title: '20.02.22',
    data: ['Pizza', 'hamburguer', 'ketchup'],
    isOnADiet: false,
  },
  {
    title: '12.02.22',
    data: ['Pizza', 'hamburguer', 'ketchup'],
    isOnADiet: true,
  },
  {
    title: '19.01.22',
    data: ['Pizza', 'hamburguer', 'ketchup'],
    isOnADiet: true,
  },
  {
    title: '01.01.22',
    data: ['Pizza', 'hamburguer', 'ketchup'],
    isOnADiet: false,
  }
]

// TODO preciso fazer função para ordenar os dias tbm, n trazer os dias 20 antes do dia 10 por ex
export function Home() {
  const { COLORS } = useTheme();

  return (
    <>
      <StatusBar 
        backgroundColor={COLORS.base.gray700}
        barStyle='dark-content'
      />
      <Container>
        <Header />

        {/* fazer lógica do isOnADiet */}
        <MealEstatistics isOnADiet={true}/>

        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <Typography fontSize='body_M' fontColor='gray100' fontFamily='regular'>
            Refeições
          </Typography> 

          <Button 
            text='Nova refeição'
            style={{ marginTop: 10 }}
          />
        </View>

        <SectionList 
          sections={Data}
          style={{ flex: 1, }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100  }}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, section: { isOnADiet } }) => (
            <MealCard 
              date='20:00'
              text={item}
              isOnADiet={isOnADiet}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Typography 
              fontSize='title_S' 
              fontColor='gray100' 
              fontFamily='bold'
              style={{ marginTop: 40, marginBottom: 10 }}
            >
              {title}
            </Typography>
          )}
        />
      </Container>
    </>
  );
}