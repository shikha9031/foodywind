import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { StoreModule } from '@ngrx/store';

import { LimitToPipe } from './pipe/limit-to.pipe';

//** reducer import */
import { keywordReducer } from './store/reducer/keyword.reducer';
import { randomFoodReducer } from './store/reducer/random.reducer';
import { readMoreReducer } from './store/reducer/read-more.reducer';
import { nutritionFoodReducer } from './store/reducer/nutrition-food.reducer';

/** import service */
import { KeywordService } from './service/keyword.service';

import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RandomRecipeComponent } from './component/random-recipe/random-recipe.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { FoodWithNutritionComponent } from './component/food-with-nutrition/food-with-nutrition.component';
import { NutritionInfoComponent } from './component/nutrition-info/nutrition-info.component';
import { SideNavFilterComponent } from './component/side-nav-filter/side-nav-filter.component';
import { RecipeInfoComponent } from './component/recipe-info/recipe-info.component';

let reducer = {
  keywordReducer:keywordReducer,
  randomFoodReducer:randomFoodReducer,
  readMoreReducer:readMoreReducer,
  nutritionFoodReducer:nutritionFoodReducer
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LimitToPipe,
    RecipeListComponent,
    RandomRecipeComponent,
    PrivacyPolicyComponent,
    SafeUrlPipe,
    FoodWithNutritionComponent,
    NutritionInfoComponent,
    SideNavFilterComponent,
    RecipeInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [KeywordService],
  bootstrap: [AppComponent]
})
export class AppModule { }