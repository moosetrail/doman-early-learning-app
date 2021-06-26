import { SpectatorHttp, createHttpFactory } from '@ngneat/spectator';

import { ChildrenApiService } from './children-api.service';

describe('ChildrenApiService', () => {
  let spectator: SpectatorHttp<ChildrenApiService>;
  const createService = createHttpFactory(ChildrenApiService);

  beforeEach(() => (spectator = createService()));

  it('can be created', () => {
    expect(spectator.service);
  });
});
