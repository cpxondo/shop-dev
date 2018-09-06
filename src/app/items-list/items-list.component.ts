import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../shared/model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Item[];
  removeItems: boolean;

  @Output() changeItem: EventEmitter<Item>;

  constructor() {
    this.removeItems = false;
    this.changeItem = new EventEmitter<Item>();
    this.items = [
      { name: 'armor', price: 22, available: true, description: 'awesome armor', currency: 'EUR'},
      { name: 'shield', price: 10, available: false, description: 'awesome shield', currency: 'USD'},
      { name: 'sword', price: 50, available: true, description: 'awesome sword', currency: 'CHF'},
      { name: 'helmet', price: 5000, available: true, description: 'awesome helmet', currency: 'USD'},
      { name: 'boots', price: 9, available: false, description: 'awesome boots', currency: 'EUR'}
    ];
   }

   onChangeItem(item: Item) {
     this.changeItem.emit(item);
   }

   onChangeVisibility() {
     console.log(this.removeItems, 'visibility');
   }

  ngOnInit() {
  }

}
