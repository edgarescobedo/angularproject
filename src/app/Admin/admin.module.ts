import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AdminComponent } from './admin.component';
import { AccountComponent } from './Account/account.component';
import { InformationComponent } from './Information/information.component';
//Import Routing File
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
    declarations: [
        AdminComponent,
        AccountComponent,
        InformationComponent
    ],
    imports: [
      BrowserModule,
      AdminRoutingModule
    ],
    providers: [],
    bootstrap: [AdminComponent]
  })
  export class AdminModule { }