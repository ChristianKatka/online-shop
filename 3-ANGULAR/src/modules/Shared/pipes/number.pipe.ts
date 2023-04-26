import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'onlyNumber' })
export class NumberPipe implements PipeTransform {
  transform(value: number | null): number {
    if (value) return value;
    return 0;
  }
}
