import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWordReadingProgramComponent } from './single-word-reading-program.component';

describe('SingleWordReadingProgramComponent', () => {
  let component: SingleWordReadingProgramComponent;
  let fixture: ComponentFixture<SingleWordReadingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWordReadingProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWordReadingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
