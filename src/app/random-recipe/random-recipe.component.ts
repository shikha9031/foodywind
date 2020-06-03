import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookingService } from "src/app/service/cooking.service";
declare var $:any;

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.scss']
})
export class RandomRecipeComponent implements OnInit {

  id: string = '';
  foodArray: any = [];

  constructor(private _store: Store<any>, private _cookingService: CookingService) { }

  ngOnInit() {
    this._store.select('randomFoodReducer').subscribe(res => {
      if (res.foodArray && res.id) {
        this.id = res.id;
        this.foodArray = res.foodArray;
      }
    })

    if (this.id === '' && this.foodArray.length === 0) {
      this._cookingService.onloadRecipeList(20).subscribe(res => {
        this.foodArray = res.recipes;
        this.id = this.foodArray[0].id;
      }, error => {
        console.log(error);
      })
    }
  }

  nextItem(){
    $('#carouselExampleControls').carousel('next');
  }

}
