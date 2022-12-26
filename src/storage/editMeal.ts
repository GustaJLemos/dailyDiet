import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "@interfaces/Meal";
import { AppError } from "@utils/AppError";
import { getAllMeals } from "@storage/getAllMeals";
import { MEAL_COLLECTION } from "./storageConfig";

export async function editMeal(meal: Meal) {
  try {
    const storageMeals = await getAllMeals();

    const RepeatedMeal = storageMeals.includes(meal);

    if(RepeatedMeal) {
      throw new AppError('Não é possível salvar as alterações, pois não existem alterações...')
    }

    const encounteredMeal = storageMeals.map(storageMeals => {
      if(storageMeals.id === meal.id) {
        return meal;
      }
      return storageMeals;
    })

    const editedMeals = JSON.stringify(encounteredMeal)

    await AsyncStorage.setItem(MEAL_COLLECTION, editedMeals)
  } catch (error) {
    throw error;
  }
}