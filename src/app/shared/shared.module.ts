import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuantityItemsComponent } from '../shared/components/quantity-items/quantity-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QuantityItemsComponent
  ],
  exports: [
    QuantityItemsComponent
  ]
})
export class SharedModule { }
