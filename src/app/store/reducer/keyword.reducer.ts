import * as keywordRef from '../action/keyword.action';
import { Observable } from "rxjs";

export const initialState = {
    keyword: ''
}

export function keywordReducer(state = initialState, action: keywordRef.actions) {
    switch (action.type) {
      case keywordRef.SEARCH_KEYWORD:
        state.keyword = action.payload;
        return { ...state };
      default:
      return { ...state};    
    }
} 