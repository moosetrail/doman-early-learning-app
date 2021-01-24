import { ListChildrenPipe } from './../../../../shared/pipes/list-children.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReadingCategoryComponent } from './../../components/reading-category/reading-category.component';
import { MockComponent, MockPipe } from 'ng-mocks';
import { MatIconModule } from '@angular/material/icon';
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator/jest';
import { ReadingProgramService } from '../../services/reading-program.service';

import { PlanSingleWordsComponent } from './plan-single-words.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PlanSingleWordsComponent', () => {
  let spectator: Spectator<PlanSingleWordsComponent>;
  const createComponent = createComponentFactory({
  component: PlanSingleWordsComponent,
  declarations: [MockComponent(ReadingCategoryComponent), MockPipe(ListChildrenPipe)],
  providers: [
    mockProvider(ReadingProgramService)
  ],
  imports: [MatIconModule, MatCardModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatSelectModule]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
  expect(spectator).toBeTruthy();
  });
});
