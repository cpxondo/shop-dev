import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { AvailableItemPipe } from './shared/pipes/available-item.pipe';
import { DisplayFilterPipe } from './shared/pipes/display-filter.pipe';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { QuantityItemsComponent } from './components/quantity-items/quantity-items.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ItemsResolver } from './shared/services/items-resolver.service';

const appRoutes: Routes = [
  { path: '',  redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'items', component: ItemsListComponent },
  { path: 'items/:id', component: ItemDetailsComponent, resolve: { item: ItemsResolver }},
  { path: 'cart', component: CartDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    AvailableItemPipe,
    DisplayFilterPipe,
    CartDetailsComponent,
    QuantityItemsComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    ItemsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
