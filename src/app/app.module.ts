import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
