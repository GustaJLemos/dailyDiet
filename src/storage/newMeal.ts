import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@interfaces/Meal";
import { AppError } from "@utils/AppError";
import { getAllMeals } from "@storage/getAllMeals";
import { MEAL_COLLECTION } from "./storageConfig";

export async function newMeal(meal: Meal) {
  try {
    const storageMeals = await getAllMeals();

    const RepeatedMeal = storageMeals.includes(meal);

    if(RepeatedMeal) {
      throw new AppError('Já existe uma refeição com os mesmos dados cadastrados.')
    }

    const newMeals = JSON.stringify([...storageMeals, meal])

    await AsyncStorage.setItem(MEAL_COLLECTION, newMeals)
  } catch (error) {
    throw error;
  }
}