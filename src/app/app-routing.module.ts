import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
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

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutesComponents = [
  WelcomeComponent,
  ItemsListComponent,
  ItemDetailsComponent,
  CartDetailsComponent,
  LoginComponent,
  ProfileComponent
];
