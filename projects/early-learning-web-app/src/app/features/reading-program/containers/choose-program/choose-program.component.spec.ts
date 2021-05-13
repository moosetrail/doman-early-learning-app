import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ChooseProgramComponent } from './choose-program.component';

describe('ChooseProgramComponent', () => {
  let spectator: Spectator<ChooseProgramComponent>;
  const createComponent = createComponentFactory(ChooseProgramComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
