import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdGridListModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import {ProductService} from './shared/services';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent, ProductTileComponent  } from './home';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

/*
   Starting from Angular material 2.0.0-beta.11 the Md prefixes are deprecated. For example,
   instead of using MdToolbarModule, you should be using MatTabModule.

   Also, you should not be importing all modules from '@angular/material', but import each module from
   an individual material module. For example, instead of this:

   import {MdToolbarModule} from '@angular/material';

   import {MatToolbarModule} from '@angular/material/toolbar';
 */
 
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
