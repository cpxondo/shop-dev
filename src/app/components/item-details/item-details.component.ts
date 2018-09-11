import { Component, Input } from '@angular/core';
import { Item } from '../../shared/model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  @Input() selectedItem: Item;
  itemQuantity: number;

  constructor(private shoopingCartService: ShoppingCartService) {
    this.itemQuantity = 1;
   }

  addToCart(item: Item) {
    this.shoopingCartService.addToCart(item, this.itemQuantity);
  }

  checkItem(id: number) {
    return this.shoopingCartService.checkItem(id);
  }

  deleteFromCart(id: number) {
    this.shoopingCartService.removeFromCart(id);
  }

  changeQuantity(quantity: number) {
    this.itemQuantity = quantity;
  }
}
