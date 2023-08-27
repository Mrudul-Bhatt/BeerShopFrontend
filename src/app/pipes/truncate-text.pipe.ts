import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
