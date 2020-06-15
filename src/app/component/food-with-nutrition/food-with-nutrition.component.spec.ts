import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWithNutritionComponent } from './food-with-nutrition.component';

describe('FoodWithNutritionComponent', () => {
  let component: FoodWithNutritionComponent;
  let fixture: ComponentFixture<FoodWithNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodWithNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWithNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
