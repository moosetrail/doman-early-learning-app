import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReadingChecklistComponent } from './reading-checklist.component';

describe('ReadingChecklistComponent', () => {
  let spectator: Spectator<ReadingChecklistComponent>;
  const createComponent = createComponentFactory({
    component: ReadingChecklistComponent,
    providers: [],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
