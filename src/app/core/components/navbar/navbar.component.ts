import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemCart } from '../../../shared/model';
import { TranslateService } from '@ngx-translate/core';
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
    private translate: TranslateService,
    private shoppingCartService: ShoppingCartService) {
    this.languages = [
      { code: 'es', value: 'Castellano'},
      { code: 'en', value: 'English'},
      { code: 'ca', value: 'Valencià'},
      { code: 'de', value: 'Deutsch'}
    ];
  }

  ngOnInit() {
    this.cartTotal$ = this.shoppingCartService.getShoppingCart().pipe(
      map(items => items.reduce((acc: number, cartItem: ItemCart) => {
        return acc + cartItem.quantity;
      }, 0)));
  }

  onChangeLanguage() {
    this.translate.use(this.selectedLanguage);
  }

}
