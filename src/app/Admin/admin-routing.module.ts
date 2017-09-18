import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AccountComponent} from './Account/account.component';
import {InformationComponent} from './Information/information.component';
import {AdminComponent} from './admin.component';
import {AuthGuardService} from '../auth-guard.service';
const routes: Routes = [
    { 
        path: 'admin',  component: AdminComponent ,canActivate:[AuthGuardService],
        children:[
            {
                path:'',
                canActivate: [AuthGuardService],
                component:InformationComponent,
            },
            {
                    path:'account',
                    canActivate: [AuthGuardService],data:{rolRequired:['admin']},
                    component:AccountComponent
            },
            {
                    path:'information',
                    canActivate: [AuthGuardService],data:{rolRequired:['user']},
                    component:InformationComponent
            }
            
        ]
    }
    
  ];
  
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}