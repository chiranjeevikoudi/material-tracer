import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { RequestComponent } from './request/request.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { BomDetailComponent } from './bom-detail/bom-detail.component';
import { BomSubmitComponent } from './bom-submit/bom-submit.component';
import {GraphMapComponent} from "./graph-map/graph-map.component";

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'login', component: ClientComponent },
  { path: 'register', component: ClientComponent },
  { path: 'manufacturer', redirectTo: 'manufacturer/request/history', pathMatch: 'full'  },
  { path: 'manufacturer', component: ManufacturerComponent, children: [
    { path: 'request/new', component: RequestComponent },
    { path: 'request/history', component: RequestComponent },
    { path: 'request/bom', component: RequestComponent },
    { path: 'request/bom/:id', component: BomDetailComponent },
    { path: 'request/:id', component: RequestDetailComponent }
  ]},
  { path: 'supplier', redirectTo: 'supplier/request/history', pathMatch: 'full'  },
  { path: 'supplier', component: SupplierComponent , children: [
    { path: 'request/history', component: RequestComponent },
    { path: 'request/graphmap', component: RequestComponent },
    { path: 'request/bom', component: RequestComponent },
    { path: 'request/bom/:id', component: BomDetailComponent },
    { path: 'request/bom/submit/:id', component: BomSubmitComponent },
    { path: 'request/:id', component: RequestDetailComponent },
    { path: 'request/graphmap/:id', component: GraphMapComponent }
  ]},
  { path: '**', component:  PageNotFoundComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
