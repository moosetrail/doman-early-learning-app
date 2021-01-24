import { MatCheckboxModule } from '@angular/material/checkbox';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ChecklistItemComponent } from './checklist-item.component';

describe('ChecklistItemComponent', () => {
  let spectator: Spectator<ChecklistItemComponent>;
  const createComponent = createComponentFactory({
  component: ChecklistItemComponent,
  providers: [
  ],
  imports: [MatCheckboxModule]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
  expect(spectator).toBeTruthy();
  });
});
