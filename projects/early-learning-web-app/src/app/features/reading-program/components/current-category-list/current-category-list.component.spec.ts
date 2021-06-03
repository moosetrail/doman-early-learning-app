import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCategoryListComponent } from './current-category-list.component';

describe('CurrentCategoryListComponent', () => {
  let component: CurrentCategoryListComponent;
  let fixture: ComponentFixture<CurrentCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
