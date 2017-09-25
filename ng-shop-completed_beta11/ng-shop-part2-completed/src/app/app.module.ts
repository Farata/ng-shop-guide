import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { ProductService } from './shared/services';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatToolbarModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
    ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
