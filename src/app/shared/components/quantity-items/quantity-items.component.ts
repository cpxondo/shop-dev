import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-quantity-items',
    templateUrl: './quantity-items.component.html',
    styleUrls: ['./quantity-items.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class QuantityItemsComponent {

  @Input() quantity: number;
  @Output() modifyQuantity: EventEmitter<number>;

  constructor() {
    this.quantity = 1;
    this.modifyQuantity = new EventEmitter<number>();
   }

   onChangeQuantity() {
     this.modifyQuantity.emit(this.quantity);
   }

}
