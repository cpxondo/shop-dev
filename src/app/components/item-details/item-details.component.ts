import { Component, Input } from '@angular/core';
import { Item } from '../../shared/model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  @Input() selectedItem: Item;

  constructor() {}
}
