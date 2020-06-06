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

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';


let reducer = {
  keywordReducer:keywordReducer,
  randomFoodReducer:randomFoodReducer,
  readMoreReducer:readMoreReducer
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LimitToPipe,
    RecipeListComponent,
    ReadMoreComponent,
    RandomRecipeComponent,
    PrivacyPolicyComponent,
    SafeUrlPipe,
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