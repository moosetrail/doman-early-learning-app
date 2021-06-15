import { ReadingChecklistComponent } from './../../../reading-program/components/reading-checklist/reading-checklist.component';
import { MockComponent } from 'ng-mocks';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { DefaultHomePageComponent } from './default-home-page.component';

describe('DefaultHomePageComponent', () => {
  let spectator: Spectator<DefaultHomePageComponent>;
  const createComponent = createComponentFactory({
    component: DefaultHomePageComponent,
    declarations: [MockComponent(ReadingChecklistComponent)],
    providers: [],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
