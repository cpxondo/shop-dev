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
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      currency: item.currency,
      quantity: quantity,
      available: item.available
    };
    this._shoppingCart.push(newItem);
  }

  removeFromCart(id: number) {
    const index = this._shoppingCart.findIndex((itemCart) => itemCart.id === id );
    this._shoppingCart.splice(index, 1);
   }

  modifyItemQuantity(id: number, quantity: number) {
    this._shoppingCart.map((itemCart) => {
      if (itemCart.id === id) {
        return itemCart.quantity = quantity;
      }
    });
  }

  getShoppingCart() {
    return this._shoppingCart;
  }

  checkItem(id: number) {
    return this._shoppingCart.findIndex((itemCart) => itemCart.id === id ) >= 0;
  }

}
