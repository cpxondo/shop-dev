import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../model';

@Pipe({
  name: 'displayFilter'
})
export class DisplayFilterPipe implements PipeTransform {

  transform(values: Item[], isEnabled?: boolean, searchTerm?: string): Item[] {
    let items = [...values];
    if (isEnabled) {
      items = items.filter((item) => item.available === true);
    }
    if (searchTerm) {
      items = items.filter((item) => item.name.includes(searchTerm) || item.description.includes(searchTerm));
    }
    return items;
  }

}
