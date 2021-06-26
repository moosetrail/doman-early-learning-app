import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListChildrenPipe } from './../../../../shared/pipes/list-children.pipe';
import { MockPipe } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import * as storeTestHelpers from './../../reading-program.state.test-helpers';

import { SingleWordReadingProgramComponent } from './single-word-reading-program.component';

describe('SingleWordReadingProgramComponent', () => {
  let spectator: Spectator<SingleWordReadingProgramComponent>;
  let sut: SingleWordReadingProgramComponent;
  const initialState = {...storeTestHelpers.initialReadingState};

  const createComponent = createComponentFactory({
    component: SingleWordReadingProgramComponent,
    imports: [MatDialogModule, RouterTestingModule, DragDropModule],
    declarations: [MockPipe(ListChildrenPipe)],
    providers: [provideMockStore({initialState})],
  });

  beforeEach(() => {
    spectator = createComponent();
    sut = spectator.component;
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
