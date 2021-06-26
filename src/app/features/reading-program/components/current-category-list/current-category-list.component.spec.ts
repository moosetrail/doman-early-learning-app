import { DragDropModule } from '@angular/cdk/drag-drop';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CurrentCategoryListComponent } from './current-category-list.component';

describe('CurrentCategoryListComponent', () => {
  let spectator: Spectator<CurrentCategoryListComponent>;
  let sut: CurrentCategoryListComponent;
  const createComponent = createComponentFactory({
    component: CurrentCategoryListComponent,
    imports: [DragDropModule],
    providers: [],
  });

  beforeEach(() => {
    spectator = createComponent();
    sut = spectator.component;
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
