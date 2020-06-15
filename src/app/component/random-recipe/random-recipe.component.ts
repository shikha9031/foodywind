import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.scss']
})
export class RandomRecipeComponent implements OnInit {

  id: string = '';
  foodArray: any = [];
  randomRecipeSubscribe:Subscription;

  constructor(private _store: Store<any>,  private _route: Router) { }

  ngOnInit() {
   this.randomRecipeSubscribe = this._store.select('randomFoodReducer').subscribe(res => {
      if (res.foodArray && res.id) {
        this.id = res.id;
        this.foodArray = res.foodArray;
      }
    })
    if(this.id === '')this._route.navigate(['/home']);
  }

  nextItem(){
    $('#carouselExampleControls').carousel('next');
  }

  ngOnDestroy(){
    this.randomRecipeSubscribe.unsubscribe();
  }
}
