import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TranslateService } from '../../shared/services/translate.service';
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

  constructor(private translateService: TranslateService) {
    this.showItems = new EventEmitter<boolean>();
    this.showWelcome = new EventEmitter<boolean>();
    this.activeTab = 'Welcome';
    this.languages = [
      { code: 'es', value: 'Castellano'},
      { code: 'en', value: 'English'},
      { code: 'ca', value: 'Valencià'}
    ];
    translateService.setLocale('es');
   }

   onChangeLanguage() {
     console.log(this.selectedLanguage, 'selected locale');
     this.translateService.setLocale(this.selectedLanguage);
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
