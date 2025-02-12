import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { Item } from '../../../../shared/model';
import { ShoppingCartService } from '../../../../shared/services/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.css'],
    standalone: false
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  selectedItem: Item;
  itemQuantity: number;
  modalRef: BsModalRef;
  subscription: Subscription;

  constructor(
    private shoopingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router) {
      this.itemQuantity = 1;
  }

  ngOnInit() {
    this.selectedItem = this.route.snapshot.data.item;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addToCart(item: Item, template: TemplateRef<any>) {
    this.shoopingCartService.addToCart(item, this.itemQuantity);
    this.modalRef = this.modalService.show(template);
    this.subscription = this.modalService.onHide.subscribe(() => {
      this.router.navigate(['/cart']);
    });
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
