import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { RandomRecipeComponent } from './component/random-recipe/random-recipe.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { MealTypeComponent } from './component/meal-type/meal-type.component';
import { NutritionInfoComponent } from './component/nutrition-info/nutrition-info.component';
import { RecipeIframeComponent } from './component/recipe-iframe/recipe-iframe.component';
import { ReadMoreComponent } from './component/read-more/read-more.component';
import { AnalysedInstructionsComponent } from './component/analysed-instructions/analysed-instructions.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'recipeList', component: RecipeListComponent },
{ path: 'random-recipe', component: RandomRecipeComponent },
{ path: 'privacy-policy', component: PrivacyPolicyComponent },
{ path: 'food/:label/:value', component: MealTypeComponent },
{ path: 'nutrition-info', component: NutritionInfoComponent },
{ path: 'get-dish-recipe', component: RecipeIframeComponent},
{ path: 'read-more', component: ReadMoreComponent },
{ path: 'analysed-instruction/:id', component: AnalysedInstructionsComponent },
{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
