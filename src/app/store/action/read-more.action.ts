import { Action } from '@ngrx/store';
export const READ_MORE = 'read-more';


export class ReadMoreAction implements Action {
    readonly type = READ_MORE;
    constructor(public payload: any) {}
  }

  export type actions = ReadMoreAction;
  