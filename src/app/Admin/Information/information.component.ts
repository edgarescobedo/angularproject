import {Component,OnInit} from '@angular/core';

import {AuthService} from '../../auth.service';

@Component({
    selector:'information-component',
    templateUrl:'./information.component.html'
})

export class InformationComponent implements OnInit{
    title='Information';
    profile:any;
  
    constructor(private auth:AuthService ){}

    ngOnInit():void{
        if (this.auth.userProfile){
            this.profile=this.auth.userProfile;
        }else{
            this.auth.getProfile((err,profile)=>{
                this.profile=profile;
            });
        }
    }

    getRolUser():string{
        return localStorage.getItem('rol_user');
    }


}