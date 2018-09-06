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
  activeTab: string;

  @Output() changeLanguage: EventEmitter<string>;
  @Output() showItems: EventEmitter<boolean>;
  @Output() showWelcome: EventEmitter<boolean>;

  constructor() {
    this.changeLanguage = new EventEmitter<string>();
    this.showItems = new EventEmitter<boolean>();
    this.showWelcome = new EventEmitter<boolean>();
    this.activeTab = 'Welcome';
    this.languages = [
      { code: 'es', value: 'Castellano'},
      { code: 'en', value: 'English'},
      { code: 'ca', value: 'Valencià'}
    ];
   }

   onChangeLanguage() {
     this.changeLanguage.emit(this.selectedLanguage);
   }

   onShowItems() {
     this.showItems.emit(true);
     this.activeTab = 'List';
   }

   onShowWelcome() {
     this.showWelcome.emit(true);
     this.activeTab = 'Welcome';
   }

}
