import { Pipe, PipeTransform } from '@angular/core';
import { en } from '../translations/en';
import { es } from '../translations/es';
import { ca } from '../translations/ca';
import { LanguageService } from '../services/language.service';

@Pipe({
    name: 'translateContent',
    pure: false,
    standalone: false
})
export class TranslateContentPipe implements PipeTransform {

  translations: Map<string, Record<string, string>>;
  constructor(private languagesService: LanguageService) {
    this.translations = new Map();
    this.translations.set('en', en);
    this.translations.set('es', es);
    this.translations.set('ca', ca);
  }

  transform(value: string): string {
    const repo = this.translations.get(this.languagesService.language);

    if (repo) {
      return repo[value] ?? value;
    }
    return value;
  }
}
