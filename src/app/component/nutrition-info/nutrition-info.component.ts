import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nutrition-info',
  templateUrl: './nutrition-info.component.html',
  styleUrls: ['./nutrition-info.component.scss']
})
export class NutritionInfoComponent implements OnInit {
  foodRecipeSubscribe: any;
  uri: any;
  foodArray: any = [];

  constructor(private _store:Store<any>,  private _route:Router) { }

  ngOnInit() {
    this.foodRecipeSubscribe = this._store.select('nutritionFoodReducer').subscribe(res => {
      if (res.foodArray.length>0 && res.id) {
        this.uri = res.id;
        this.foodArray = res.foodArray;
      }
    })
    if(!this.uri || this.foodArray.length<=0){
      this._route.navigate(['/home']);
    }
  }

  ngOnDestroy(){
    this.foodRecipeSubscribe.unsubscribe();
  }
}
