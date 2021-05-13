import { ListChildrenPipe } from './../../../../shared/pipes/list-children.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReadingCategoryComponent } from './../../components/reading-category/reading-category.component';
import { MockComponent, MockPipe } from 'ng-mocks';
import { MatIconModule } from '@angular/material/icon';
import {
  byText,
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { ReadingProgramService } from '../../services/reading-program.service';

import { PlanSingleWordsComponent } from './plan-single-words.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PlanSingleWordsComponent', () => {
  let spectator: Spectator<PlanSingleWordsComponent>;
  const createComponent = createComponentFactory({
    component: PlanSingleWordsComponent,
    declarations: [
      MockComponent(ReadingCategoryComponent),
      MockPipe(ListChildrenPipe),
    ],
    providers: [mockProvider(ReadingProgramService)],
    imports: [
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should set showCompleted to true', () => {
    spectator.component.showCompletedCategories();

    expect(spectator.component.showCompleted).toBeTruthy();
  });

  describe('UI', () => {
    describe('completed', () => {
      it('should not show completed categories when flag is false', () => {
        spectator.component.showCompleted = false;
        spectator.detectChanges();

        expect(spectator.query(byText('Completed categories'))).toBeNull();
      });
    });
  });
});
