import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
interface Locale {
  code: string;
  value: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  languages: Locale[];
  selectedLanguage = 'es';

  @Output() changeLanguage: EventEmitter<string>;

  constructor() {
    this.changeLanguage = new EventEmitter<string>();
    this.languages = [
      { code: 'es', value: 'Castellano'},
      { code: 'en', value: 'English'},
      { code: 'ca', value: 'Valencià'}
    ];
   }

   onChangeLanguage() {
     this.changeLanguage.emit(this.selectedLanguage);
   }

}
