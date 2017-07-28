import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdIconModule,
  MdTabsModule,
  MdToolbarModule,
  MdGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ProductService } from './shared/services';
import { HomeComponent, ProductTileComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MdGridListModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
