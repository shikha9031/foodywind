import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeywordService } from '../service/keyword.service';
import * as keywordRef from '../store/action/keyword.action';
import { Store } from "@ngrx/store";
import { KeywordInterface } from "../interface/keyword.interface";
import { CookingService } from '../service/cooking.service';
import * as readMoreRef from '../store/action/read-more.action'
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchFormFlag: boolean = false;
  suggestionBoxForIngredients: boolean;

  keyword:any = '';
  timer:any;
  autoSuggestionObj:any = [];
  suggestion:string = "Suggestion: onion,garlic";
  searchType:string = 'Food Name';
  opensuggestionBox:boolean = false;
  currentUrl:string='';

  constructor(
    private _route:Router,
    private _keywordService:KeywordService, 
    private _store:Store<any>,
    private _cookingService:CookingService,
    private cd:ChangeDetectorRef) { }

  ngOnInit() {}

  ngAfterViewChecked(){
    this.currentUrl = window.location.pathname;
    this.cd.detectChanges();
  }

  submitSearchKeyword(){
      this._store.dispatch(new keywordRef.KeywordAction(this.keyword));
      this._route.navigate(['/recipeList']);
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
      },500)
    }
    else if(this.searchType === 'Ingredients'){
      clearTimeout(this.timer);
      this.suggestionBoxForIngredients = true;
      this.timer = setTimeout(res=>{
         this._cookingService.autoIngredeintsSuggestion(this.keyword).subscribe(res=>{
           if(res){
            this.autoSuggestionObj = res;
           }
         })
      },500)
    }
  }


  // readMorePageNavigate(param){
  //   this.opensuggestionBox = false;
  //   this._store.dispatch(new readMoreRef.ReadMoreAction(param));
  //   this._route.navigate(['/read-more']);
  // }

  openSearchForm(param){
    if(param === 'open') this.searchFormFlag = true;
    if(param === 'close') this.searchFormFlag = false;
  }
}
