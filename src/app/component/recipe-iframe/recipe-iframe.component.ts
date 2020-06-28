import { Component, OnInit, ElementRef, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-iframe.component.html',
  styleUrls: ['./recipe-iframe.component.scss']
})
export class RecipeIframeComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;

  id: string = '';
  foodArray: any = [];
  randomRecipeSubscribe: Subscription;
  loadingSpinner: boolean = true;
  
  
  constructor(private _store: Store<any>, private _route: Router, private _changeDetection:ChangeDetectorRef) { }

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
    if (this.iframe) {
      let iframeDoc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow.document;
      // Check if loading is complete
      if (iframeDoc.readyState == 'complete') {
        this.loadingSpinner = false;
        this._changeDetection.detectChanges();
      }
    }

  }

  afterLoading() {
    alert("I am here");
  }
  nextItem() {
    $('#carouselExampleControls').carousel('next');
  }

  ngOnDestroy() {
    this.randomRecipeSubscribe.unsubscribe();
  }
}
