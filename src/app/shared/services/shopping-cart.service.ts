import { Injectable } from '@angular/core';
import { ItemCart, Item } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCart: ItemCart[];
  constructor() {
    this._shoppingCart = [];
  }

  addToCart(item: Item, quantity: number) {
    let newItem: ItemCart;
    newItem = {
      item: item,
      quantity: quantity
    };
    this._shoppingCart.push(newItem);
  }

  removeFromCart(item: ItemCart) {
    const index = this._shoppingCart.findIndex((itemCart) => itemCart === item );
    this._shoppingCart.splice(index, 1);
   }

  modifyItemQuantity(item: Item, quantity: number) {
    this._shoppingCart.map((itemCart) => {
      if (itemCart.item.name === item.name) {
        return itemCart.quantity = quantity;
      }
    });
  }

  getShoppingCart() {
    return this._shoppingCart;
  }
}
