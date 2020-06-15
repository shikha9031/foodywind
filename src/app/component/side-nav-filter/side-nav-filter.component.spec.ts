import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFilterComponent } from './side-nav-filter.component';

describe('SideNavFilterComponent', () => {
  let component: SideNavFilterComponent;
  let fixture: ComponentFixture<SideNavFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
