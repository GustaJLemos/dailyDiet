import { Meal } from "@interfaces/Meal";
import { MealEstatistics } from "@interfaces/MealEstatistics";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomeScreen: undefined;
      NewMealScreen: undefined;
      EstatisticsScreen: {
        estatistics: MealEstatistics;
      };
      NewMealFeedbackScreen: {
        isOnADiet: boolean;
      };
      MealDetailsScreen: {
        meal: Meal;
      },
      EditMealScreen: {
        meal: Meal
      };
    }
  }
}