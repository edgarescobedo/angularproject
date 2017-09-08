import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Import Routing File
import {AppRoutingModule} from './app-routing.module';

//Import Components will use
import {WelcomeComponent} from './welcome.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
