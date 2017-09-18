import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Import Routing File
import {AppRoutingModule} from './app-routing.module';

//Import Components will use
import {WelcomeComponent} from './Public/Welcome/welcome.component';
import {AboutComponent} from './Public/About/about.component';
import {LoginComponent} from './Public/Login/login.component';
//Imports modules
import {AdminModule} from './Admin/admin.module';
import {PublicModule} from './Public/public.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
