import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../shared/model';
import { RetrieveItemsService } from '../../../../shared/services/retrieve-items.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.css'],
    standalone: false
})
export class ItemsListComponent implements OnInit {
  items: Item[];
  removeItems: boolean;
  searchFilter: string;

  constructor(
    private itemsService: RetrieveItemsService,
    private router: Router) {
    this.removeItems = false;
    this.searchFilter = undefined;
  }

  ngOnInit() {
    this.itemsService.getItems()
      .subscribe(data => {
        this.items = data;
    });
  }

   onChangeItem(item: Item) {
     this.router.navigate(['/items/' + item.id]);
   }

}
