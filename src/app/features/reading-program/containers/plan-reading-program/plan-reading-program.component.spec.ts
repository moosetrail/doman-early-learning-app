import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanReadingProgramComponent } from './plan-reading-program.component';

describe('PlanReadingProgramComponent', () => {
  let component: PlanReadingProgramComponent;
  let fixture: ComponentFixture<PlanReadingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanReadingProgramComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanReadingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
