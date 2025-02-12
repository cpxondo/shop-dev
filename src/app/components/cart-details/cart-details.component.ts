import { Component, OnInit } from '@angular/core';
import { ItemCart } from '../../shared/model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart-details',
    templateUrl: './cart-details.component.html',
    styleUrls: ['./cart-details.component.css'],
    standalone: false
})
export class CartDetailsComponent implements OnInit {

  cart$: Observable<ItemCart[]>;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cart$ = this.shoppingCartService.getShoppingCart();
  }

  refreshCart(item: ItemCart, quantity: number) {
    this.shoppingCartService.modifyItemQuantity(item.id, quantity);
  }

  deleteFromCart(item: ItemCart) {
    this.shoppingCartService.removeFromCart(item.id);
  }

  getTotal() {
    return this.shoppingCartService.getTotal();
  }

  onChangeQuantity(quantity: number, item: ItemCart) {
    this.shoppingCartService.modifyItemQuantity(item.id, quantity);
  }

}
