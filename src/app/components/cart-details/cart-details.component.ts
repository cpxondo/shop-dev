import { Component, OnInit } from '@angular/core';
import { ItemCart } from '../../shared/model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cart: ItemCart[];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.cart = this.shoppingCartService.getShoppingCart();
  }

  refreshCart(item: ItemCart, quantity: number) {
    this.shoppingCartService.modifyItemQuantity(item.id, quantity);
  }

  deleteFromCart(item: ItemCart) {
    this.shoppingCartService.removeFromCart(item.id);
  }

  getTotal() {
    return this.cart.reduce((acc: number, cartItem: ItemCart) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0);
  }

  ngOnInit() {
  }

}
