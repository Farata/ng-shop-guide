import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdGridListModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import {ProductService} from './shared/services';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent, ProductTileComponent  } from './home';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdGridListModule,
    MdTabsModule,
    MdToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
