import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { RandomRecipeComponent } from './component/random-recipe/random-recipe.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { FoodWithNutritionComponent } from './component/food-with-nutrition/food-with-nutrition.component';
import { NutritionInfoComponent } from './component/nutrition-info/nutrition-info.component';
import { RecipeInfoComponent } from './component/recipe-info/recipe-info.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'recipeList', component: RecipeListComponent },
{ path: 'random-recipe', component: RandomRecipeComponent },
{ path: 'privacy-policy', component: PrivacyPolicyComponent },
{ path: 'food-with-nutrition', component: FoodWithNutritionComponent },
{ path: 'nutrition-info', component: NutritionInfoComponent },
{ path: 'recipe-info', component: RecipeInfoComponent},
{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
