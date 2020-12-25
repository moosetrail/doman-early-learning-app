import { RouterTestingModule } from '@angular/router/testing';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let spectator: Spectator<MainLayoutComponent>;
  const createComponent = createComponentFactory({
    component: MainLayoutComponent,
    imports: [RouterTestingModule],
    providers: [],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
