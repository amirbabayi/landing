import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg";
import {CartComponent} from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
