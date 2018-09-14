import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemsResolver } from '../../shared/services/items-resolver.service';

const itemRoutes: Routes = [
  { path: '', component: ItemsListComponent },
  { path: ':id', component: ItemDetailsComponent, resolve: { item: ItemsResolver }}
];

@NgModule({
  imports: [
    RouterModule.forChild(itemRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule { }
