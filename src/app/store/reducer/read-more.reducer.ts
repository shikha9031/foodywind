import * as readMoreRef from '../action/read-more.action';
import { Observable } from "rxjs";

export const initialState = {
    recipe:''
}

export function readMoreReducer(state = initialState, action: readMoreRef.actions) {
    switch (action.type) {
      case readMoreRef.READ_MORE:
        state.recipe = action.payload;
        return { ...state };
      default:
      return { ...state};    
    }
} 