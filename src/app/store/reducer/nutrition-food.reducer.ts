import * as nutrionFoodRef from '../action/nutrition-food.action';
import { Observable } from "rxjs";

export const initialState = {
    id:'',
    foodArray:[]
}

export function nutritionFoodReducer(state = initialState, action: nutrionFoodRef.actions) {
    switch (action.type) {
      case nutrionFoodRef.NUTRITION_FOOD_DATA:
        state.id = action.payload.id;
        state.foodArray = action.payload.foodArray;
        return { ...state };
      default:
      return { ...state};    
    }
} 