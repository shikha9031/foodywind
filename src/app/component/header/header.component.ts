import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as keywordRef from '../../store/action/keyword.action';
import { Store } from "@ngrx/store";
import { KeywordInterface } from "../../interface/keyword.interface";
import { CookingService } from '../../service/cooking.service';
import * as readMoreRef from '../../store/action/read-more.action'
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
  suggestion:string = "Suggestion: onion,potato";
  searchType:string = 'Recipe search with ingredients';
  opensuggestionBox:boolean = false;
  currentUrl:string='';

  constructor(
    private _route:Router,
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
    if(this.searchType === 'Recipe search with ingredients'){
      this._route.navigate(['/recipeList']);
    }
     else if(this.searchType === 'Food with nutrition'){
      this._route.navigate(['/food-with-nutrition']);
     }
  }

  openSearchForm(param){
    if(param === 'open') this.searchFormFlag = true;
    if(param === 'close') this.searchFormFlag = false;
  }

}
