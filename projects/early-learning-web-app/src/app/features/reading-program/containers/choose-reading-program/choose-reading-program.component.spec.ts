import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseReadingProgramComponent } from './choose-reading-program.component';

describe('ChooseReadingProgramComponent', () => {
  let component: ChooseReadingProgramComponent;
  let fixture: ComponentFixture<ChooseReadingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseReadingProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseReadingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
