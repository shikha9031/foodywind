import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeywordService } from '../service/keyword.service';
import * as keywordRef from '../store/action/keyword.action';
import { Store } from "@ngrx/store";
import { KeywordInterface } from "../interface/keyword.interface";
import { CookingService } from '../service/cooking.service';
import * as readMoreRef from '../store/action/read-more.action'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keyword:any = '';
  timer:any;
  autoSuggestionObj:any = [];
  suggestion:string = "Suggestion: puloa";
  searchType:string = 'Food Name';
  opensuggestionBox:boolean = false;

  constructor(private _route:Router, private _keywordService:KeywordService, private _store:Store<any>, private _cookingService:CookingService) { }

  ngOnInit() {}
  
  submitSearchKeyword(){
    if(this.searchType === 'Ingredients'){
      this._store.dispatch(new keywordRef.KeywordAction(this.keyword));
      this._route.navigate(['/recipeList']);
    }
    else if(this.searchType === 'Food Name'){
      if(this.autoSuggestionObj && this.autoSuggestionObj.length>0){
          for(let i = 0; i<this.autoSuggestionObj.length; i++){
            if(this.autoSuggestionObj[i].title === this.keyword){
              this.readMorePageNavigate(this.autoSuggestionObj[i].id);
            }
          }
      }
    }
  }


  autosuggestionFun(){
    if(this.searchType === 'Food Name'){
      clearTimeout(this.timer);
      this.opensuggestionBox = true;
      this.timer = setTimeout(res=>{
         this._cookingService.autoSuggestion(this.keyword).subscribe(res=>{
           if(res){
            this.autoSuggestionObj = res;
           }
         })
      },100)
    }
   
  }

  readMorePageNavigate(param){
    this.opensuggestionBox = false;
    this._store.dispatch(new readMoreRef.ReadMoreAction(param));
    this._route.navigate(['/read-more']);
  }
}
