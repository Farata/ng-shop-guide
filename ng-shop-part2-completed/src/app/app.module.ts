import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdGridListModule, MdTabsModule,
         MdButtonModule, MdSelectModule, MdIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import {ProductService} from './shared/services';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent, ProductTileComponent  } from './home';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductComponent, ProductDetailsComponent } from './product';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import {FormsModule} from "@angular/forms";


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
    MdToolbarModule,
    MdGridListModule,
    MdTabsModule,
    MdToolbarModule,
    MdIconModule,
    FormsModule,
    MdButtonModule,
    MdSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
