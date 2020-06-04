import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../service/keyword.service';
import { CookingService } from '../service/cooking.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { KeywordInterface } from "src/app/interface/keyword.interface";
import * as readMoreRef from '../store/action/read-more.action'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipeList: any = [];
  keyword: any;

  constructor(
     private _keywordService:KeywordService,
     private _cookingService:CookingService,
     private _route:Router,
    private _store:Store<any>) { }

  ngOnInit() {
    this._store.select('keywordReducer').subscribe((res:KeywordInterface)=>{
        if(res && res.keyword){
          this.keyword = res.keyword;
          this.callApi();
        }
    })
    if(!this.keyword) this._route.navigate(['/home']);
  }
  callApi(){
    if(this.keyword){
      this._cookingService.getRecipeByIngriedients(this.keyword).subscribe(res=>{
        this.recipeList = res;
      },error=>{
        console.log(error);
      })
    }
  }

  redirectTo(param){
    this._store.dispatch(new readMoreRef.ReadMoreAction(param));
    this._route.navigate(['/read-more']);
  }
}
