import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator';

import { EditCategoryComponent } from './edit-category.component';

describe('EditCategoryComponent', () => {
  let spectator: Spectator<EditCategoryComponent>;
  let sut: EditCategoryComponent;
  const createComponent = createComponentFactory({
    component: EditCategoryComponent,
    imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    providers: [mockProvider(MatDialogRef),  {
      // I was expecting this will pass the desired value
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }],
  });

  beforeEach(() => {
    spectator = createComponent();
    sut = spectator.component;
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
