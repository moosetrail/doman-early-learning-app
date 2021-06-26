import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PlannedCategoryListComponent } from './planned-category-list.component';

describe('PlannedCategoryListComponent', () => {
  let spectator: Spectator<PlannedCategoryListComponent>;
  let sut: PlannedCategoryListComponent;
  const createComponent = createComponentFactory({
    component: PlannedCategoryListComponent,
    imports: [DragDropModule, MatIconModule],
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
