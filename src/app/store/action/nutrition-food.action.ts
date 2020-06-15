import { Action } from '@ngrx/store';
export const NUTRITION_FOOD_DATA = 'nutrition-food-data';

export class NutritionFoodDataAction implements Action {
    readonly type = NUTRITION_FOOD_DATA;
    constructor(public payload: any) {}
  }
  export type actions = NutritionFoodDataAction;
  