import { Injectable } from '@angular/core';
import { ItemCart, Item } from '../model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCart: ItemCart[];
  private _items$: BehaviorSubject<ItemCart[]>;
  constructor() {
    this._shoppingCart = [];
    this._items$ = new BehaviorSubject(this._shoppingCart);
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
    this._items$.next(this._shoppingCart);
  }

  removeFromCart(id: number) {
    const index = this._shoppingCart.findIndex((itemCart) => itemCart.id === id );
    this._shoppingCart.splice(index, 1);
    this._items$.next(this._shoppingCart);
   }

  modifyItemQuantity(id: number, quantity: number) {
    this._shoppingCart.map((itemCart) => {
      if (itemCart.id === id) {
        return itemCart.quantity = quantity;
      }
    });
    this._items$.next(this._shoppingCart);
  }

  getShoppingCart(): Observable<ItemCart[]> {
    return this._items$.asObservable();
  }

  checkItem(id: number) {
    return this._shoppingCart.findIndex((itemCart) => itemCart.id === id ) >= 0;
  }

  getTotal(): number {
    return this._shoppingCart.reduce((acc: number, cartItem: ItemCart) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0);
  }

}
