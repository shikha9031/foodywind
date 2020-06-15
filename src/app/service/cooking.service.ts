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

  searchRecipe(){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'number':'5','cuisine':'Indian','excludeIngredients':'beef' }
    }
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/search', httpOptionsForRecipe);    
  }

  extractRecipeVideo(param){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'key':'AIzaSyATIoN1F0eAwjHcyWNTrrupL-8izfWDvFM', 'part':'snippet', 'q':param, 'type':'video', "maxResults":'20', 'topicId':'/m/02wbm'  }
    }
    return this._httpClient.get<any>('https://www.googleapis.com/youtube/v3/search', httpOptionsForRecipe);    
  }

  getEdamamFood(data){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'app_id':'d0ea9085', 'app_key':"87d489a3f81e4d63571f3fa501729f95", "q": data, "health":"red-meat-free" }
    }
    return this._httpClient.get<any>('https://api.edamam.com/search', httpOptionsForRecipe);    
  }
}
