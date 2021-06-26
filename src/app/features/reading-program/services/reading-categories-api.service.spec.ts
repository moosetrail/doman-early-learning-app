import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator';

import { ReadingCategoriesApiService } from './reading-categories-api.service';

describe('ReadingCategoriesApiService', () => {
  let spectator: SpectatorHttp<ReadingCategoriesApiService>;
  const createService = createHttpFactory(ReadingCategoriesApiService);

  beforeEach(() => (spectator = createService()));

  it('can be created', () => {
    expect(spectator.service);
  });
});
