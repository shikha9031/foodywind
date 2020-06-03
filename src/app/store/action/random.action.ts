import { Action } from '@ngrx/store';
export const RANDOM_SEARCH_FOOD = 'random-search-food';


export class RandomSearchFoodAction implements Action {
    readonly type = RANDOM_SEARCH_FOOD;
    constructor(public payload: any) {}
  }

export type actions = RandomSearchFoodAction;
  