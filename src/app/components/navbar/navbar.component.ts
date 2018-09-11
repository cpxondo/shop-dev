import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemCart } from '../../shared/model';
interface Locale {
  code: string;
  value: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  languages: Locale[];
  selectedLanguage = 'es';
  activeTab: string;
  numItems: number;
  cartTotal$: Observable<number>;

  @Output() showItems: EventEmitter<boolean>;
  @Output() showWelcome: EventEmitter<boolean>;
  @Output() showCart: EventEmitter<boolean>;

  constructor(private languageService: LanguageService,
              private shoppingCartService: ShoppingCartService) {
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
    this.numItems = 0;
   }

   ngOnInit() {
     this.cartTotal$ = this.shoppingCartService.getShoppingCart().pipe(
       map(items => items.reduce((acc: number, cartItem: ItemCart) => {
          return acc + cartItem.quantity;
       }, 0)));
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
