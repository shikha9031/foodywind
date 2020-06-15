import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnInit {

  id: string = '';
  foodArray: any = [];
  randomRecipeSubscribe: Subscription;

  constructor(private _store: Store<any>, private _route: Router) { }

  ngOnInit() {
    this.randomRecipeSubscribe = this._store.select('randomFoodReducer').subscribe(res => {
      if (res.foodArray && res.id) {
        this.id = res.id;
        this.foodArray = res.foodArray;
      }
    })
    if (this.id === '') this._route.navigate(['/home']);
  }
  ngAfterViewInit() {
    var iframe = document.getElementById('i_frame')[0];
    // var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // if (iframeDoc.readyState == 'complete') {
    //   $('#myIframe').on('load', function(){
    //     alert("completed");
    //     //your code (will be called once iframe is done loading)
    // });
    // }
    // else{
    //   console.log("not loaded");
    // }
  }
  nextItem() {
    $('#carouselExampleControls').carousel('next');
  }

  ngOnDestroy() {
    this.randomRecipeSubscribe.unsubscribe();
  }
}
