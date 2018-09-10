import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
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

  @Output() showItems: EventEmitter<boolean>;
  @Output() showWelcome: EventEmitter<boolean>;
  @Output() showCart: EventEmitter<boolean>;

  constructor(private languageService: LanguageService) {
    this.showItems = new EventEmitter<boolean>();
    this.showWelcome = new EventEmitter<boolean>();
    this.showCart = new EventEmitter<boolean>();
    this.activeTab = 'Welcome';
    this.languages = [
      { code: 'es', value: 'Castellano'},
      { code: 'en', value: 'English'},
      { code: 'ca', value: 'Valencià'}
    ];
    this.languageService.language = 'es';
   }

   onChangeLanguage() {
     console.log(this.selectedLanguage, 'selected locale');
     this.languageService.language = this.selectedLanguage;
   }

   onShowItems() {
     this.showItems.emit(true);
     this.activeTab = 'List';
   }

   onShowWelcome() {
     this.showWelcome.emit(true);
     this.activeTab = 'Welcome';
   }

   onShowCart() {
     this.showCart.emit(true);
     this.activeTab = 'Cart';
   }

}
