import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EditCategoryComponent } from './edit-category.component';

describe('EditCategoryComponent', () => {
  let spectator: Spectator<EditCategoryComponent>;
  const createComponent = createComponentFactory(EditCategoryComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
