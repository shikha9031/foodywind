import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CookingService } from "src/app/service/cooking.service";

@Component({
  selector: 'app-analysed-instructions',
  templateUrl: './analysed-instructions.component.html',
  styleUrls: ['./analysed-instructions.component.scss']
})
export class AnalysedInstructionsComponent implements OnInit {
  sourceUrl: any;
  summary: any;
  extendedIngredients: any = [];
  analysedArray: any = [];
  subscribedService: Subscription;
  url: any;
  title: any;
  subscribedRecipe: Subscription;
  getInformationRecipe: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private _cookingService:CookingService) { }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];
    this.callApi(id);
    if (!id) this._route.navigate(['/home']);
  }

  

  callApi(param) {
      this.subscribedService = this._cookingService.getAnalysedRecipe(param).subscribe(res=>{
        if(res && res[0].steps){
            this.analysedArray = res[0].steps;
        }
      })
      this.getInformationRecipe = this._cookingService.getInformationOfRecipe(param).subscribe(res=>{
          if(res && res.extendedIngredients){
              this.extendedIngredients = res.extendedIngredients;
              this.summary = res.summary;
              this.title = res.title;
              this.url = res.image;
              this.sourceUrl = res.sourceUrl;
          }
      })
  }

  ngOnDestroy() {
    this.subscribedService.unsubscribe();
    this.getInformationRecipe.unsubscribe();
  }
}
