import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AvailableItemPipe } from './shared/pipes/available-item.pipe';
import { DisplayFilterPipe } from './shared/pipes/display-filter.pipe';
import { QuantityItemsComponent } from './components/quantity-items/quantity-items.component';
import { ItemsResolver } from './shared/services/items-resolver.service';
import { CoreModule } from './core/core.module';
import { AppRoutingModule, appRoutesComponents } from './app-routing.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    appRoutesComponents,
    AvailableItemPipe,
    DisplayFilterPipe,
    QuantityItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ModalModule.forRoot(),
    CoreModule
  ],
  providers: [
    ItemsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
