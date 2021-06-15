import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { ReadingCategoryComponent } from './reading-category.component';

describe('ReadingCategoryComponent', () => {
  let spectator: Spectator<ReadingCategoryComponent>;


  const createComponent = createComponentFactory({
    component: ReadingCategoryComponent,
    providers: [],
    imports: [MatMenuModule, MatIconModule, MatCardModule, MatButtonModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  describe('show actions', () => {
    beforeEach(() => {
      spectator.component.category = {
        categoryName: 'Cars',
        cards: [
          { textOnCard: 'Volvo' },
          { textOnCard: 'BMW' },
          { textOnCard: 'Audi' },
          { textOnCard: 'Ford' },
          { textOnCard: 'Toyota' },
        ],
      };

      spectator.detectChanges();

      const button = spectator.query('button');
      expect(button).not.toBeNull();

      if(button != null){
        spectator.click(button);
      }
    });

    it('should show all actions as default', () => {
      expect(spectator.query('#completed')).toBeTruthy();
      expect(spectator.query('#current')).toBeTruthy();
      expect(spectator.query('#planned')).toBeTruthy();
      expect(spectator.query('#remove')).toBeTruthy();
      expect(spectator.query('#statistics')).toBeTruthy();
      expect(spectator.query('#edit')).toBeTruthy();
    });

    it('should not show move to completed if flag set to false', () => {
      spectator.component.showMoveToCompleted = false;

      spectator.detectChanges();

      expect(spectator.query('#completed')).toBeFalsy();
    });

    it('should not show move to current if flag set to false', () => {
      spectator.component.showMoveToCurrent = false;

      spectator.detectChanges();

      expect(spectator.query('#current')).toBeFalsy();
    });

    it('should not show move to planned if flag set to false', () => {
      spectator.component.showMoveToPlanned = false;

      spectator.detectChanges();

      expect(spectator.query('#planned')).toBeFalsy();
    });

    it('should not show remove if flag set to false', () => {
      spectator.component.showRemove = false;

      spectator.detectChanges();

      expect(spectator.query('#remove')).toBeFalsy();
    });

    it('should not show statistics if flag set to false', () => {
      spectator.component.showStatistics = false;

      spectator.detectChanges();

      expect(spectator.query('#statistics')).toBeFalsy();
    });

    it('should not show edit if flag set to false', () => {
      spectator.component.showEdit = false;

      spectator.detectChanges();

      expect(spectator.query('#edit')).toBeFalsy();
    });
  });
});
