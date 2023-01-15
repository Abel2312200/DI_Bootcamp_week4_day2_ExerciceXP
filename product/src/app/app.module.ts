import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighLightDirective } from './high-light.directive';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HighLightDirective,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
