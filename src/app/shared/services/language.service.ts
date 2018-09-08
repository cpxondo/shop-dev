import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _language: string;
  constructor() { }

  public get language(): string {
    return this._language;
  }

  public set language(language: string) {
    this._language = language;
  }

}
