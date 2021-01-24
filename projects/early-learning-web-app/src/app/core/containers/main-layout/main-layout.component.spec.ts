import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, mockProvider } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let spectator: Spectator<MainLayoutComponent>;
  const createComponent = createComponentFactory({
    component: MainLayoutComponent,
    imports: [RouterTestingModule, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule],
    providers: [mockProvider(MediaObserver)],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
