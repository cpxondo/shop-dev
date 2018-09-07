import { Pipe, PipeTransform } from '@angular/core';
import { en } from '../translations/en.js';
import { es } from '../translations/es.js';
import { ca } from '../translations/ca.js';

@Pipe({
  name: 'translateContent'
})
export class TranslateContentPipe implements PipeTransform {

  transform(value: string, locale: string): string {
    let translation = '';

        switch (locale) {
          case 'en' :
            translation = en[value];
            break;
          case 'ca' :
            translation = ca[value];
            break;
          case 'es' :
            translation = es[value];
            break;
          default:
            console.warn('locale not found');
          }

        if (translation.length > 0) {
          return translation;
        }
        return value;
    }
  }
