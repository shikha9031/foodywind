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

  searchRecipe(value){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'number':'30', 'type': value , 'instructionsRequired':'true' }
    }
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/complexSearch', httpOptionsForRecipe);    
  }

  extractRecipeFromWebsite(url){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'url':url, 'forceExtraction':'true', 'analyze':'true' }
    }
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/extract', httpOptionsForRecipe);    
  }

  getAnalysedRecipe(id){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4'}
    }
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/'+id+'/analyzedInstructions', httpOptionsForRecipe);    
  }
  getInformationOfRecipe(id){
    let httpOptionsForRecipe = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: { 'apiKey':'a1ebedbdd79346e7b600f9382f080bc4', 'includeNutrition':'false'}
    }
    return this._httpClient.get<any>('https://api.spoonacular.com/recipes/'+id+'/information', httpOptionsForRecipe);    
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

  // getSpoonacularRecipe(){

  // }

  getEdamamFood(label, value){
    let httpOptionsForRecipe;
    if(label === "dishType"){
       httpOptionsForRecipe = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params: { 'app_id':'d0ea9085', 'app_key':"87d489a3f81e4d63571f3fa501729f95", "q": '', 'dishType':value, 'from':0, 'to':20}
      }
    }
    else{
       httpOptionsForRecipe = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params: { 'app_id':'d0ea9085', 'app_key':"87d489a3f81e4d63571f3fa501729f95", "q": '', 'mealType':value, 'from':0, 'to':20}
      }
    }
    
    return this._httpClient.get<any>('https://api.edamam.com/search', httpOptionsForRecipe);    
  } 
}
