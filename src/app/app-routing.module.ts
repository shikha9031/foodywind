import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ReadMoreComponent } from './read-more/read-more.component'
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'recipeList', component: RecipeListComponent },
{ path: 'read-more', component: ReadMoreComponent },
{ path: 'random-recipe', component: RandomRecipeComponent },
{ path: 'privacy-policy', component: PrivacyPolicyComponent },
{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
