import { Component, OnInit } from '@angular/core';
import { CookingService } from '../../service/cooking.service';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as randomRecipeRef from '../../store/action/random.action';
import * as keywordRef from '../../store/action/keyword.action';
import * as readMoreRef from '../../store/action/read-more.action';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomRecipe: any = [];
  baseUri: any;
  foodData:any = [];

  foodTypeArray:any = [
    { label:'breakfast'},
    { label:'soup'},
    { label:'bread'},
    { label:'dessert'},
    { label:'salad'},
    { label:'side dish'},
    { label:'main course'},
    { label:'beverage'},
    { label:'sauce'},
    { label:'fingerfood'},
    { label:'snack'  }
  ];

  constructor(private _cookingService:CookingService, private _route:Router, private _store:Store<any>) { }

  ngOnInit() {
    this._cookingService.onloadRecipeList(20).subscribe(res=>{
      this.randomRecipe = res.recipes;
    },error=>{
      console.log(error);
    })
  }

  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      autoWidth: true,
      margin:35
    });
  }
  redirectTo(param){
    this._store.dispatch(new readMoreRef.ReadMoreAction(param))    
    this._route.navigate(['/read-more']);
  }

  readMorePageNavigate(id){
    this._store.dispatch(new randomRecipeRef.RandomSearchFoodAction({id:id, foodArray:this.randomRecipe}))
    this._route.navigate(['/random-recipe']);
  }

  redirectToShowFood(list){
     this._route.navigate(['/food', 'mealType' ,list.label]);
  }
}
