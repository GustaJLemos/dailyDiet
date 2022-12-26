import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@interfaces/Meal";
import { MEAL_COLLECTION } from "./storageConfig";

export async function getAllMeals() {
  try {
    const storageMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: Meal[] = storageMeals ? JSON.parse(storageMeals) : []

    return meals;
  } catch (error) {
    throw error;
  }
}