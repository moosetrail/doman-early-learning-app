import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingCategoryComponent } from './reading-category.component';

describe('ReadingCategoryComponent', () => {
  let component: ReadingCategoryComponent;
  let fixture: ComponentFixture<ReadingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
