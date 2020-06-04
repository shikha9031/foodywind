import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookingService {

  constructor(private _httpClient:HttpClient) { }

  onloadRecipeList(number){
    /*** this url gives the recipe details  */
   let httpOptionsForRecipe = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'number': number, 'tags':'vegetarian,egg' }
  }
   return this._httpClient.get<any>('https://api.spoonacular.com/recipes/random', httpOptionsForRecipe);
  }

  foodInfoFun(foodId){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'includeNutrition':'false'}
    };
    let foodInfo = foodId+'/information';
    return this._httpClient.get<any>("https://api.spoonacular.com/recipes/"+foodInfo, httpOptions);
  }

  getRecipeByIngriedients(keyword){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'ingredients':keyword, 'number':'50' }
    }
    
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/findByIngredients', httpOptionsForRecipe);    
  }

  searchRecipe(){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'number':'5','cuisine':'Indian','excludeIngredients':'beef' }
    }
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/search', httpOptionsForRecipe);    
  }

  autoSuggestion(param){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'number':'20', 'query':param }
    }
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/autocomplete', httpOptionsForRecipe);    
  }
}
