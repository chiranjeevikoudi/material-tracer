import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestComponent } from './request/request.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BomDetailComponent } from './bom-detail/bom-detail.component';
import { BomSubmitComponent } from './bom-submit/bom-submit.component';
import { GraphMapComponent } from './graph-map/graph-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ManufacturerComponent,
    SupplierComponent,
    RequestDetailComponent,
    RequestComponent,
    PageNotFoundComponent,
    BomDetailComponent,
    BomSubmitComponent,
    GraphMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
