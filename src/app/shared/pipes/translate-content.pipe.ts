import { Pipe, PipeTransform } from '@angular/core';
import { en } from '../translations/en.js';
import { es } from '../translations/es.js';
import { ca } from '../translations/ca.js';
import { TranslateService } from '../services/translate.service.js';

@Pipe({
  name: 'translateContent'
})
export class TranslateContentPipe implements PipeTransform {

  translations: Map<string, object>;
  constructor(private translateService: TranslateService) {
    this.translations = new Map();
    this.translations.set('en', en);
    this.translations.set('es', es);
    this.translations.set('ca', ca);
  }

  transform(value: string): string {
    const translation = value;
    const locale = this.translateService.getLocale();
    const repo = this.translations.get(locale);

    if (repo) {
      return repo[value];
    }
    return translation;
  }
}
