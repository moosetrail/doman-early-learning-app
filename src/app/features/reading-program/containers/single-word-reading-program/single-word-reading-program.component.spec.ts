import { CategoryListComponent } from './../../components/category-list/category-list.component';
import { CurrentCategoryListComponent } from './../../components/current-category-list/current-category-list.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListChildrenPipe } from './../../../../shared/pipes/list-children.pipe';
import { MockPipe, MockComponent } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import * as storeTestHelpers from './../../reading-program.state.test-helpers';

import { SingleWordReadingProgramComponent } from './single-word-reading-program.component';

describe('SingleWordReadingProgramComponent', () => {
  let spectator: Spectator<SingleWordReadingProgramComponent>;
  let sut: SingleWordReadingProgramComponent;
  const initialState = { ...storeTestHelpers.initialReadingState };

  const createComponent = createComponentFactory({
    component: SingleWordReadingProgramComponent,
    imports: [
      MatDialogModule,
      RouterTestingModule,
      DragDropModule,
      MatIconModule,
    ],
    declarations: [
      MockPipe(ListChildrenPipe),
      MockComponent(CurrentCategoryListComponent),
      MockComponent(CategoryListComponent),
    ],
    providers: [provideMockStore({ initialState })],
  });

  beforeEach(() => {
    spectator = createComponent();
    sut = spectator.component;
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
