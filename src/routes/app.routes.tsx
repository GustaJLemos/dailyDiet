import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditMeal } from '@screens/EditMeal';
import { Estatistics } from '@screens/Estatistics';
import { Home } from '@screens/Home';
import { MealDetails } from '@screens/MealDetails';
import { NewMeal } from '@screens/NewMeal';
import { NewMealFeedback } from '@screens/NewMealFeedback';
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="HomeScreen" 
        component={Home} 
      />
      <Screen 
        name="NewMealScreen" 
        component={NewMeal} 
      />
      <Screen 
        name="EstatisticsScreen" 
        component={Estatistics} 
      />
      <Screen 
        name="NewMealFeedbackScreen" 
        component={NewMealFeedback} 
      />
      <Screen 
        name="MealDetailsScreen" 
        component={MealDetails} 
      />
      <Screen 
        name="EditMealScreen" 
        component={EditMeal} 
      />
    </Navigator>
  );
}