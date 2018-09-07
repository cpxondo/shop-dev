import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availableItem'
})
export class AvailableItemPipe implements PipeTransform {

  transform(value: boolean, isEnabled: boolean): string {
    if (!isEnabled || value) {
      return 'table-row';
    }
    return 'none';
  }

}
