import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Alert, Image, SectionList } from 'react-native';
import { Container, Header, NewMeal } from './styles';
import { useTheme } from 'styled-components/native'
import { MealEstatistics } from '@components/MealEstatistics';
import { Typography } from '@components/Typography';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';
import LogoPng from '@assets/Logo.png'
import UserProfilePng from '@assets/UserProfile.png'
import { Meal } from '@interfaces/Meal';
import uuid from 'react-native-uuid';
import { ListEmptyComponent } from '@components/ListEmptyComponent';
import { Loading } from '@components/Loading';
import { MealEstatistics as Estatistics } from '@interfaces/MealEstatistics';
import { datePtBr } from '@helpers/timeHelper';
import { getAllMeals } from '@storage/getAllMeals';
import { hhmm } from '@helpers/timeHelper'

type SectionListMeal = {
  title: string;
  data: Meal[];
}

const default_meals_estatistics: Estatistics = {
  mealsIsOnADiet: 0,
  sequenceOfMealsWithinDiet: 0,
  mealTotal: 0,
  mealsOnDiet: 0,
  mealsOffDiet: 0,
}

// TODO preciso fazer função para ordenar os dias tbm, n trazer os dias 20 antes do dia 10 por ex
export function Home() {
  
  const { COLORS } = useTheme();
  
  const navigation = useNavigation();

  const [sectionListMeal, setSectionListMeal] = useState<SectionListMeal[]>([]);

  const [requestInLoading, setRequestInLoading] = useState(false);

  const [mealsEstatistics, setMealsEstatistics] = useState<Estatistics>(default_meals_estatistics);

  //#region Navigate
  function HandleNavigateToEstatistics() {
    navigation.navigate('EstatisticsScreen', { estatistics: mealsEstatistics });
  }
  
  function HandleNavigateToNewMeal() {
    navigation.navigate('NewMealScreen');
  }
  
  function handleNavigateToMealDetails(item: Meal) {
    navigation.navigate('MealDetailsScreen', {  meal: item });
  }
  //#endregion Navigate

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function transformOnValiDate(value: string) {
    const [dia, mes, ano] = value.split('/');
    const formatedDate = new Date(Number(ano), Number(mes) - 1, Number(dia));
    return formatedDate;
  }

  function transformOnValiHour(value: string) {
    const formatedValue = value.replace(':', '');
    
    return formatedValue;
  }

  function convertValueToHourFormat(value: string) {
    const hour = value.slice(0, 2);
    const minute = value.slice(2, 4);
    
    return hour + ':' + minute;
  }

  function setEstatisticsInformation(meals: Meal[]) {
    // TODO melhorar esse cara aqui
    let sequenceOfDiet = 0
    let biggestSequence = 0

    const transformedDateToPtbr = orderTheMealsDates(meals);
    // preciso primeiro ordenas o array pra dai coisar
    transformedDateToPtbr.map((meal, index) => {
      if(meal.isOnADiet === true) {
        sequenceOfDiet++
        if(sequenceOfDiet > biggestSequence) {
          biggestSequence = sequenceOfDiet
        }
        return 
      }
      return sequenceOfDiet = 0
    })
  
    const mealOsADiet = meals.filter(meal => meal.isOnADiet === true)

    const averageOfMealsWithinDiet = (mealOsADiet.length / meals.length) * 100;

    const onDiet = meals.filter(meal => meal.isOnADiet === true)

    const offDiet = meals.filter(meal => meal.isOnADiet === false)

    const estatistics: Estatistics = {
      mealsIsOnADiet: Number(averageOfMealsWithinDiet ? averageOfMealsWithinDiet.toFixed(2) : 0),
      sequenceOfMealsWithinDiet: biggestSequence,
      mealTotal: meals.length,
      mealsOnDiet: onDiet.length,
      mealsOffDiet: offDiet.length,
    }
    
    setMealsEstatistics(estatistics);
  }

  function orderTheTitlesDates(storageMeals: Meal[]) {
    const mealDateTitles = storageMeals.map(meal => meal.date)

    const uniqueDates = mealDateTitles.filter(onlyUnique)

    const formatedDate = uniqueDates.map(meal => {
      return transformOnValiDate(meal)
    })

    const orderedByMoreRecently = formatedDate.sort((a, b) => b - a)

    const transformedDateToPtbr = orderedByMoreRecently.map(meal => {
      return datePtBr(new Date(meal))
    })

    return transformedDateToPtbr;
  }

  function orderTheMealsDates(storageMeals: Meal[]) {
    const formatedDate = storageMeals.map(meal => {
      const formatedValidDate: Meal = {
        ...meal,
        hour: transformOnValiHour(meal.hour),
      }
      return formatedValidDate;
    })

    const orderedByMoreRecently = formatedDate.sort((a, b) => b.hour - a.hour)

    const transformedDateToPtbr = orderedByMoreRecently.map(meal => {
      const formatedWithNewDate: Meal = {
        ...meal,
        hour: convertValueToHourFormat(meal.hour),
      }
      return formatedWithNewDate;
    })
    
    return transformedDateToPtbr;
  }

  async function getMeals() {
    setRequestInLoading(true);
    try {
      const storageMeals = await getAllMeals();

      setEstatisticsInformation(storageMeals);
      // TODO terminar
      if(storageMeals.length > 0) {
        const orderedTitlesByDate = orderTheTitlesDates(storageMeals)

        const orderedMealsByDate = orderTheMealsDates(storageMeals)

        const formatedSectionListMeal: SectionListMeal[] = orderedTitlesByDate.map(sectionMeal => {
          const mealList: SectionListMeal = {
            title: sectionMeal,
            data: orderedMealsByDate.filter(storageMeal => storageMeal.date === sectionMeal)
          }
          return mealList;
        })

        setSectionListMeal(formatedSectionListMeal)
      }
    } catch (error) {
      Alert.alert('Buscar refeições', 'Não foi possível buscar as refeições')
    } finally {
      setRequestInLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    getMeals();
  }, []));

  return (
    <>
      <Container>
        <Header>
        <Image 
          source={LogoPng}
        />
        <Image 
          source={UserProfilePng}
        />
        </ Header>

        {/* fazer lógica do isOnADiet */}
        <MealEstatistics 
          title={`${mealsEstatistics.mealsIsOnADiet}%`}
          subtitle='das refeições dentro da dieta'
          isOnADiet={true}
          onPress={HandleNavigateToEstatistics}
        />

        <NewMeal>
          <Typography fontSize='body_M' fontColor='gray100' fontFamily='regular'>
            Refeições
          </Typography> 

          <Button 
            text='Nova refeição'
            style={{ marginTop: 10 }}
            onPress={HandleNavigateToNewMeal}
            icon={<Plus size={22} color={COLORS.base.white} weight='bold'/>}
          />
        </NewMeal>
    
        {
           requestInLoading ? 
           <Loading /> :
           <SectionList 
            sections={sectionListMeal}
            style={{ flex: 1, }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100  }}
            keyExtractor={(item, index) => item?.name + index}
            renderItem={({ item, index }) => (
              <MealCard 
                date={item?.hour}
                text={item?.name}
                isOnADiet={item?.isOnADiet}
                onPress={() => handleNavigateToMealDetails(item)}
                key={item?.name + index}
              />
            )}
            renderSectionHeader={({ section }) => (
              <Typography 
                fontSize='title_S' 
                fontColor='gray100' 
                fontFamily='bold'
                style={{ marginTop: 40, marginBottom: 10 }}
              >
                {section?.title}
              </Typography>
            )}
            ListEmptyComponent={() => (
              <ListEmptyComponent 
                message={'Parece que a lista está vazia...\nQue tal cadastrar uma refeição?'}
              />
            )}
          />
        }
        
      </Container>
    </>
  );
}