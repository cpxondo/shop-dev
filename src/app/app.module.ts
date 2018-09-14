import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule, appRoutesComponents } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    appRoutesComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CoreModule,
    SharedModule,
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
