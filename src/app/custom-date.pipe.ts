import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(timestamp: number, withHours: boolean): string {
    var date = new Date(timestamp);
    var result = date.toLocaleDateString();
    if (withHours) {
      result += ' ' + date.getHours() + ':' + date.getMinutes();
    }
    return result;
  }
}
