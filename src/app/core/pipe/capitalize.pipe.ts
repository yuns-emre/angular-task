import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    return value.replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase());
  }

}
