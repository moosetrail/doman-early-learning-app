import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ReadingCategoryComponent } from './reading-category.component';

describe('ReadingCategoryComponent', () => {
  let spectator: Spectator<ReadingCategoryComponent>;
  const createComponent = createComponentFactory({
    component: ReadingCategoryComponent,
    providers: [],
    imports: [MatMenuModule, MatIconModule, MatCardModule, MatButtonModule]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
