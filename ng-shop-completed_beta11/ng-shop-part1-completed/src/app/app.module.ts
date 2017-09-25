import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { ProductService } from './shared/services';
import { HomeComponent, ProductTileComponent } from './home';

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
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
    ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
