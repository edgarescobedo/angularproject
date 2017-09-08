import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

//Import Components will use
import {WelcomeComponent} from './welcome.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome',  component: WelcomeComponent },
    { path: 'about',     component: AboutComponent },
    { path: 'contact',     component: ContactComponent }
  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}