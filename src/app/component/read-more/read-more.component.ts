import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { CookingService } from "src/app/service/cooking.service";

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  recipeData: any;
  readMoreRecipeSubscribe: Subscription;
  serviceSubscription:Subscription;

  constructor(private _store: Store<any>, private _route: Router, private _cookingService: CookingService) { }

  ngOnInit() {
    this.readMoreRecipeSubscribe = this._store.select('readMoreReducer').subscribe(res => {
      if (res.recipe) {
        this.recipeData = res.recipe;
      }
    })
    if (!this.recipeData) this._route.navigate(['/home']);
  }
  ngOnDestroy() {
      this.readMoreRecipeSubscribe.unsubscribe();
  }
}
