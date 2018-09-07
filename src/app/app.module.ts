import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AvailableItemPipe } from './shared/pipes/available-item.pipe';
import { DisplayFilterPipe } from './shared/pipes/display-filter.pipe';
import { TranslateContentPipe } from './shared/pipes/translate-content.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    AvailableItemPipe,
    DisplayFilterPipe,
    TranslateContentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
