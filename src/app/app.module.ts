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

import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RandomRecipeComponent } from './component/random-recipe/random-recipe.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { MealTypeComponent } from './component/meal-type/meal-type.component';
import { SideNavFilterComponent } from './component/side-nav-filter/side-nav-filter.component';
import { RecipeIframeComponent } from './component/recipe-iframe/recipe-iframe.component';
import { ReadMoreComponent } from './component/read-more/read-more.component';
import { AnalysedInstructionsComponent } from './component/analysed-instructions/analysed-instructions.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

let reducer = {
  keywordReducer:keywordReducer,
  randomFoodReducer:randomFoodReducer,
  readMoreReducer:readMoreReducer,
  nutritionFoodReducer:nutritionFoodReducer,
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
    MealTypeComponent,
    SideNavFilterComponent,
    RecipeIframeComponent,
    ReadMoreComponent,
    AnalysedInstructionsComponent,
    ContactUsComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }