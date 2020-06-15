import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class KeywordService {
  searchKeyword = new BehaviorSubject('');
  
  constructor() { }

    getKeyword(){
    return this.searchKeyword.asObservable();
  }
    setKeyword(param:any){
    this.searchKeyword.next(param);
  }
}
