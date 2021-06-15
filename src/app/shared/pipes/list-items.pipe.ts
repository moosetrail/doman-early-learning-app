import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listItems'
})
export class ListItemsPipe implements PipeTransform {

  transform(values: string[]): string {

    let str = '';

    for(let i = 0; i < values.length; i++){

      if(i+1 < values.length || i == 0){
        if(i > 0){
          str = str + ', ';
        }
        str = str + values[i];
      } else {
        str = str + ' and ' + values[i];
      }
    }

    return str;
  }

}
