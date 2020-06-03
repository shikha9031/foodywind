import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeywordService } from '../service/keyword.service';
import * as keywordRef from '../store/action/keyword.action';
import { Store } from "@ngrx/store";
import { KeywordInterface } from "../interface/keyword.interface";
import { CookingService } from '../service/cooking.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keyword:any = '';
  timer:any;
  autoSuggestionObj = [];


  constructor(private _route:Router, private _keywordService:KeywordService, private _store:Store<any>, private _cookingService:CookingService) { }

  ngOnInit() {}
  
  submitSearchKeyword(){
    this._store.dispatch(new keywordRef.KeywordAction(this.keyword));
    this._route.navigate(['/recipeList']);
  }


  // autosuggestionFun(){
  //   clearTimeout(this.timer);
  //   this.timer = setTimeout(res=>{
  //      this._cookingService.autoSuggestion(this.keyword).subscribe(res=>{
  //        if(res){
  //         this.autoSuggestionObj = res;
  //        }
  //      })
  //   },500)
  // }

  // readMorePageNavigate(param){
  //   this.keyword = param;
  //   this._store.dispatch(new keywordRef.KeywordAction(this.keyword));
  //   this._route.navigate(['/recipeList']);
  // }
}
