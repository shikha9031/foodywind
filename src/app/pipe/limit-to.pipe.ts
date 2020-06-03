import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    
    let trail = '...';

    return value.length > args ? value.substring(0, args) + trail : value;
  }

}
