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
  cartTotal$: Observable<number>;

  constructor(
    private languageService: LanguageService,
    private shoppingCartService: ShoppingCartService) {
    this.languages = [
      { code: 'es', value: 'Castellano'},
      { code: 'en', value: 'English'},
      { code: 'ca', value: 'Valencià'}
    ];
    this.languageService.language = 'es';
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

}
