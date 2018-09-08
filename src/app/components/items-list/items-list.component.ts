import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from '../../shared/model';
import { RetrieveItemsService } from '../../shared/services/retrieve-items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Item[];
  removeItems: boolean;
  searchFilter: string;

  @Output() changeItem: EventEmitter<Item>;

  constructor(private itemsService: RetrieveItemsService) {
    this.removeItems = false;
    this.searchFilter = undefined;
    this.changeItem = new EventEmitter<Item>();
  }

  ngOnInit() {
    this.itemsService.getItems()
      .subscribe(data => {
        this.items = data;
    });
  }

   onChangeItem(item: Item) {
     this.changeItem.emit(item);
   }

}
