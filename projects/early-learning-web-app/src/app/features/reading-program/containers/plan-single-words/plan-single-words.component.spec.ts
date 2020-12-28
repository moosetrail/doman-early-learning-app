import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSingleWordsComponent } from './plan-single-words.component';

describe('PlanSingleWordsComponent', () => {
  let component: PlanSingleWordsComponent;
  let fixture: ComponentFixture<PlanSingleWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSingleWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSingleWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
