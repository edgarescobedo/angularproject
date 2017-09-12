import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PublicComponent } from './public.component';

//Import Routing File
import {PublicRoutingModule} from './public-routing.module';
import {AuthService} from '../auth.service';
import {AuthGuardService} from '../auth-guard.service';

@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
      BrowserModule,
      PublicRoutingModule
    ],
    providers: [AuthService,AuthGuardService],
    bootstrap: [PublicComponent]
  })
  export class PublicModule { }


