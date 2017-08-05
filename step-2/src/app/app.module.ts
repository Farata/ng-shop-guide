import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdIconModule,
  MdSelectModule,
  MdTabsModule,
  MdToolbarModule,
  MdGridListModule
} from '@angular/material';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { ProductService } from './shared/services';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    MdButtonModule,
    MdGridListModule,
    MdSelectModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
