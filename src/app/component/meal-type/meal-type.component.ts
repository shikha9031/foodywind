import { Component, OnInit } from '@angular/core';
import { KeywordInterface } from "src/app/interface/keyword.interface";
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute } from "@angular/router";
import { CookingService } from "src/app/service/cooking.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'meal-type',
  templateUrl: './meal-type.component.html',
  styleUrls: ['./meal-type.component.scss']
})
export class MealTypeComponent implements OnInit {
  value: any;
  recipeList: any = [];
  subscribedKeyword:Subscription;
  
  
  constructor(
    private _route:Router, 
    private _store:Store<any>, 
    private _cookingService:CookingService,
    private _activatedRoute:ActivatedRoute
 ) {}

  ngOnInit() {
    let label = this._activatedRoute.snapshot.params['label'];
    this.value = this._activatedRoute.snapshot.params['value'];
    if(label && this.value) this.callApi(label, this.value);
    else this._route.navigate(['/home']);

  }

  callApi(label, value) {
    this.subscribedKeyword  = this._cookingService.searchRecipe(value).subscribe((res:any)=>{
      if(res && res.results){
        this.recipeList = res.results;
      }
    })
  }

  getRecipe(param){
      this._route.navigate(['/analysed-instruction', param.id])
  }
  ngOnDestroy(){
    this.subscribedKeyword.unsubscribe();
  }
}
