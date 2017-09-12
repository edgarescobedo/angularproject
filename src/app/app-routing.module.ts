import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AdminComponent} from './Admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}