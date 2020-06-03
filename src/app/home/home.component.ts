import { Component, OnInit } from '@angular/core';
import { CookingService } from '../service/cooking.service';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as randomRecipeRef from '../store/action/random.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomRecipe: any;
  baseUri: any;
  items:string;
  foodData:any = [];
  constructor(private _cookingService:CookingService, private _route:Router, private _store:Store<any>) { }

  ngOnInit() {
    this._cookingService.searchRecipe().subscribe(res=>{
      this.foodData = res.results;
      this.baseUri = res.baseUri;
    },error=>{
      console.log(error);
    })

    this._cookingService.onloadRecipeList(8).subscribe(res=>{
      this.randomRecipe = res.recipes;
    },error=>{
      console.log(error);
    })
  }


  redirectTo(param){
    window.open(param, '_blank');
  }

  readMorePageNavigate(id){
    this._store.dispatch(new randomRecipeRef.RandomSearchFoodAction({id:id, foodArray:this.randomRecipe}))
    this._route.navigate(['/random-recipe']);
  }
}
