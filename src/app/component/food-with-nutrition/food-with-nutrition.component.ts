import { Component, OnInit } from '@angular/core';
import { KeywordInterface } from "src/app/interface/keyword.interface";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { CookingService } from "src/app/service/cooking.service";
import { KeywordService } from "src/app/service/keyword.service";
import { Subscription } from "rxjs";
import * as nutrionFoodRef from '../../store/action/nutrition-food.action';

@Component({
  selector: 'app-food-with-nutrition',
  templateUrl: './food-with-nutrition.component.html',
  styleUrls: ['./food-with-nutrition.component.scss']
})
export class FoodWithNutritionComponent implements OnInit {
  totalResults: number = 1;
  recipeList: any = [];
  keyword: any;
  subscribedKeyword:Subscription;
  from:number;
  to:number;
  
  constructor(
    private _route:Router, 
    private _store:Store<any>, 
    private _cookingService:CookingService,
 ) {}

  ngOnInit() {
    this.subscribedKeyword = this._store.select('keywordReducer').subscribe(res=>{
      if(res && res.keyword != ''){
        this.keyword = res.keyword;
        this.callApi();
      }
    })
    if (!this.keyword) this._route.navigate(['/home']);
  }

  callApi() {
    this._cookingService.getEdamamFood(this.keyword).subscribe(res=>{
      if(res && res.hits){
        this.recipeList = res.hits;
        this.totalResults = res.count;
        this.from = res.from;
        this.to = res.to;
      }
    })
  }

  redirectToNutritionInfo(param){
    this._store.dispatch(new nutrionFoodRef.NutritionFoodDataAction({id:param.recipe.uri, foodArray: this.recipeList}));
    this._route.navigate(['/nutrition-info']);
  }
  ngOnDestroy(){
    this.subscribedKeyword.unsubscribe();
  }
}
