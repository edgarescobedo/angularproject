import {Component} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
    selector:'login-component',
    templateUrl:'./login.component.html'
})

export class LoginComponent{
    title='Login';
    message:string;

    constructor(private router:Router, private authservice:AuthService){
        this.setMessage();
    }

    setMessage(){
        this.message='Logged-'+(this.authservice.isAuthenticated()?'in':'out');
    }

    login():void{
        this.message="Trying to log in";

        /*this.authservice.login().subscribe(
            ()=>{
                let redirect = this.authservice.redirectUrl? this.authservice.redirectUrl:'../../admin';

                this.router.navigate([redirect]);
            }
        )*/
        this.authservice.login();
    }

    logout():void{
        this.message="Trying to log in";
        this.authservice.logout();
        this.setMessage();
    }
    

}