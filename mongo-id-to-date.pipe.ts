import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mongoIdToDate'
})
export class MongoIdToDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const timestamp = value.toString().substring(0, 8)
    return new Date(parseInt(timestamp, 16) * 1000)
  }

}
