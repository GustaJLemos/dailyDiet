import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@interfaces/Meal";
import { AppError } from "@utils/AppError";
import { getAllMeals } from "@storage/getAllMeals";
import { MEAL_COLLECTION } from "./storageConfig";

export async function excludeMeal(meal: Meal) {
  try {
    const storageMeals = await getAllMeals();

    const mealsWithoutExcludedMeal = storageMeals.filter(storageMeals => String(storageMeals.id) !== String(meal.id))

    const newMeals = JSON.stringify(mealsWithoutExcludedMeal)

    await AsyncStorage.setItem(MEAL_COLLECTION, newMeals)
  } catch (error) {
    throw error;
  }
}