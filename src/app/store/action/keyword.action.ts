import { Action } from '@ngrx/store';
export const SEARCH_KEYWORD = 'search-keyword';

export class KeywordAction implements Action {
    readonly type = SEARCH_KEYWORD;
    constructor(public payload: any) {}
  }
  export type actions = KeywordAction;
  