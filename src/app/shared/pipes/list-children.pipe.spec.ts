import { Child } from './../models/interfaces/child';
import { mockProvider } from '@ngneat/spectator';
import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator/jest';
import { ListChildrenPipe } from './list-children.pipe';
import { ListItemsPipe } from './list-items.pipe';

describe('ListChildrenPipe', () => {
  let spectator: SpectatorPipe<ListChildrenPipe>;
  const createPipe = createPipeFactory({
    pipe: ListChildrenPipe,
    providers: [mockProvider(ListItemsPipe)],
  });

  it('should sum up the given list of numbers (template)', () => {
    const children: Child[] = [
      { firstName: 'Adam' } as Child,
      { firstName: 'Ben' } as Child,
      { firstName: 'Caesar' } as Child,
    ];
    const itemPipe = {transform: () => 'children listed'} as ListItemsPipe;
    const spy = jest.spyOn(itemPipe, 'transform');

    spectator = createPipe('{{ prop | listChildren }}', {
      hostProps: {
        prop: children
      },
      providers: [{
        provide: ListItemsPipe,
        useValue: itemPipe
      }]
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(children.map(c => c.firstName));
    expect(spectator.element).toHaveText('children listed');
  });
});
