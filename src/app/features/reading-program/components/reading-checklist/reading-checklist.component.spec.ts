import { ListItemsPipe } from './../../../../shared/pipes/list-items.pipe';
import { ChecklistItemComponent } from './../../../../shared/components/checklist-item/checklist-item.component';
import { MockComponent, MockPipe } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReadingChecklistComponent } from './reading-checklist.component';

describe('ReadingChecklistComponent', () => {
  let spectator: Spectator<ReadingChecklistComponent>;
  const createComponent = createComponentFactory({
    component: ReadingChecklistComponent,
    declarations: [MockComponent(ChecklistItemComponent), MockPipe(ListItemsPipe)],
    providers: [],
    imports: [MatCardModule]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
