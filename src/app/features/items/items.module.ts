import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DisplayFilterPipe } from '../../shared/pipes/display-filter.pipe';
import { AvailableItemPipe } from '../../shared/pipes/available-item.pipe';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule,
    ItemsRoutingModule,
    SharedModule
  ],
  declarations: [
    AvailableItemPipe,
    DisplayFilterPipe,
    ItemsListComponent,
    ItemDetailsComponent
  ]
})
export class ItemsModule { }
