import { Component, OnInit } from '@angular/core';
import { CookingService } from '../../service/cooking.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { KeywordInterface } from "src/app/interface/keyword.interface";
import * as readMoreRef from '../../store/action/read-more.action'
import { Subscription } from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipeList: any = [];
  keyword: any;
  baseURl = "";
  subscribedKeyword:Subscription;

  constructor(
    private _cookingService: CookingService,
    private _route: Router,
    private _store: Store<any>,
    ) { }

  ngOnInit() {
   this.subscribedKeyword = this._store.select('keywordReducer').subscribe(res=>{
      if(res && res.keyword != ''){
        this.keyword = res.keyword;
        this.baseURl = '';
        this.callApi();
      }
    })
    if (!this.keyword) this._route.navigate(['/home']);
  }

  callApi() {
    if (this.keyword) {
      this._cookingService.extractRecipeVideo(this.keyword).subscribe(res => {
        if (res.items && res.items.length > 0) this.recipeList = res.items;
      }, error => {
        console.log(error);
      })
    }
  }

  showVideo(param) {
    window.scrollTo(0, 0);
    this.baseURl = 'https://www.youtube.com/embed/' + param;
  }

  ngOnDestroy(){
    this.subscribedKeyword.unsubscribe();
  }
}
