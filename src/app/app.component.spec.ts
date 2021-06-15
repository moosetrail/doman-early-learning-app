import { AppComponent } from './app.component';
import { createComponentFactory } from '@ngneat/spectator';
import { Spectator } from '@ngneat/spectator';
import { MainLayoutComponent } from './core/containers/main-layout/main-layout.component';
import { MockComponent } from 'ng-mocks';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(MainLayoutComponent)],
    providers: [],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
