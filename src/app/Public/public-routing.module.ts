import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

//Import Components will use
import {WelcomeComponent} from './Welcome/welcome.component';
import {AboutComponent} from './About/about.component';
import {LoginComponent} from './Login/login.component';

const routes: Routes = [
    { path: 'welcome',  component: WelcomeComponent },
    { path: 'about',     component: AboutComponent },
    { path: 'login', component:LoginComponent}
  ];
  
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PublicRoutingModule{}