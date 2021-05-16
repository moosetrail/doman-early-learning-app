import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Child } from '../models/interfaces/child';
import { ListItemsPipe } from './list-items.pipe';

@Pipe({
  name: 'listChildren'
})
export class ListChildrenPipe implements PipeTransform {

  constructor(@Inject(ListItemsPipe) private listPipe: ListItemsPipe){}

  transform(children: Child[] | undefined | null): string {
    if(children === undefined || children === null){
      return '';
    }

    return this.listPipe.transform(children.map(child => child.firstName));
  }
}
