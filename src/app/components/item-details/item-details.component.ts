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

  constructor(private shoopingCartService: ShoppingCartService) {}

  addToCart(item: Item) {
    this.shoopingCartService.addToCart(item, 1);
  }
}
