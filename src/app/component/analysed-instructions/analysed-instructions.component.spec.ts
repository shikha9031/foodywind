import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysedInstructionsComponent } from './analysed-instructions.component';

describe('AnalysedInstructionsComponent', () => {
  let component: AnalysedInstructionsComponent;
  let fixture: ComponentFixture<AnalysedInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysedInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysedInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
