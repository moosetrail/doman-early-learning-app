import { AppConfigurationService } from './../configuration/app-configuration.service';
import {
  createServiceFactory,
  SpectatorService,
  mockProvider,
} from '@ngneat/spectator';

import { DefaultApiEndpointInterceptor } from './default-api-endpoint.interceptor';

describe('DefaultApiEndpointInterceptor', () => {
  let spectator: SpectatorService<DefaultApiEndpointInterceptor>;
  const createService = createServiceFactory({
    service: DefaultApiEndpointInterceptor,
    providers: [mockProvider(AppConfigurationService)],
  });

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });
});
