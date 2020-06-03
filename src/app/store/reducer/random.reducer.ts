import * as randomFoodRef from '../action/random.action';
import { Observable } from "rxjs";

export const initialState = {
    id:'',
    foodArray:[]
}

export function randomFoodReducer(state = initialState, action: randomFoodRef.actions) {
    switch (action.type) {
      case randomFoodRef.RANDOM_SEARCH_FOOD:
        state.id = action.payload.id;
        state.foodArray = action.payload.foodArray
        return { ...state };
      default:
      return { ...state};    
    }
} 