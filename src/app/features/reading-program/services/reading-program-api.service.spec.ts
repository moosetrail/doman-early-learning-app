import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator';

import { ReadingProgramApiService } from './reading-program-api.service';

describe('ReadingProgramApiService', () => {
  let spectator: SpectatorHttp<ReadingProgramApiService>;
  const createService = createHttpFactory(ReadingProgramApiService);

  beforeEach(() => (spectator = createService()));

  it('can be created', () => {
    expect(spectator.service).not.toBeNull();;
  });
});
