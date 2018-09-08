import { Component } from '@angular/core';
import { Item } from './shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-dev';
  clickedItemDetails: Item;
  itemsVisibility: boolean;
  welcomeVisibility: boolean;
  detailsVisibility: boolean;

  constructor() {
    this.itemsVisibility = false;
    this.detailsVisibility = false;
    this.welcomeVisibility = true;
  }

  eventItemDetails(item: Item) {
    this.clickedItemDetails = item;
    this.detailsVisibility = true;
    this.welcomeVisibility = false;
    this.itemsVisibility = false;
  }

  eventItemsVisibility(display: boolean) {
    this.itemsVisibility = display;
    this.detailsVisibility = false;
    this.welcomeVisibility = false;
  }

  eventWelcomeVisibility(display: boolean) {
    this.welcomeVisibility = display;
    this.detailsVisibility = false;
    this.itemsVisibility = false;
  }

}
