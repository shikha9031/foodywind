import { Component, OnInit } from '@angular/core';
import dietJson  from '../../json-data/diet.json';
import dishTypeJson from '../../json-data/dish-type.json';
import healthJson from '../../json-data/health.json';
import cuisionJson  from  '../../json-data/cuision.json';
import mealTypeJson from '../../json-data/meal-type.json';
import nutritionCodeJson  from '../../json-data/nutrition-code.json';

declare var config:any;

@Component({
  selector: 'side-nav-filter',
  templateUrl: './side-nav-filter.component.html',
  styleUrls: ['./side-nav-filter.component.scss']
})
export class SideNavFilterComponent implements OnInit {
  nutritionCodeData: any;
  mealTypeData: any;
  cuisionData: any;
  healthData: any;
  dishTypeData: any;
  dietData: any;
  config:any;
  
  openDietData:boolean = false;
  openhealthData:boolean = false;
  openCuisineData:boolean = false;
  openMealType:boolean = false;
  openDishType:boolean = false;
  openCaloriesData:boolean = false;
  openExcludedItem:boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.dietData = dietJson.data;
    this.dishTypeData = dishTypeJson.data;
    this.healthData = healthJson.data;
    this.cuisionData = cuisionJson.data;
    this.mealTypeData = mealTypeJson.data;
    this.nutritionCodeData = nutritionCodeJson.data;
  }

  ngAfterViewInit() { }

  openNav() {
    document.getElementById("mySidenav").style.width = "450px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
