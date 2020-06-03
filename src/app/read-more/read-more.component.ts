import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookingService } from "src/app/service/cooking.service";
import { Router } from "@angular/router";

@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  foodData: any;
  id: string = '';

  constructor(private _store: Store<any>, private _cookingService: CookingService,  private _route:Router) { }

  ngOnInit() {
    this._store.select('readMoreReducer').subscribe(res => {
      if (res.id) {
        this.id = res.id;
        this.callApi();
      }
    })
    if (this.id === '') {
        this._route.navigate(['/home']);
    }
  }
  callApi(): any {
    this._cookingService.foodInfoFun(this.id).subscribe(res => {
      if(res) this.foodData = res;
    }, error => {
      console.log(error);
    })
  }

  backToRecipePage(){
    this._route.navigate(['/recipeList']);
  }

}
