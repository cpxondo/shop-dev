import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../shared/model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RetrieveItemsService } from '../../shared/services/retrieve-items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  selectedItem: Item;
  itemQuantity: number;

  constructor(
    private shoopingCartService: ShoppingCartService,
    private route: ActivatedRoute) {
      this.itemQuantity = 1;
  }

  ngOnInit() {
    this.selectedItem = this.route.snapshot.data.item;
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
