import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private _locale: string;

  constructor() {
    this._locale = 'es';
  }

  setLocale(locale: string) {
    this._locale = locale;
  }

  getLocale() {
    return this._locale;
  }
 }
