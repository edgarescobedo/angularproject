import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

import {JwtHelper} from 'angular2-jwt';

@Injectable()

export class AuthService{

    userProfile:any;
    requestScopes:string='openid profile';

    jwtHelper: JwtHelper = new JwtHelper();

    auth0= new auth0.WebAuth({
        clientID:'3j6Hvbtu9iz2YaEXjfyJcxHOFg0Btt34',
        domain: 'prontoayudatest.auth0.com',
        responseType: 'token id_token',
        audience: 'https://prontoayudatest.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/admin',  
        //audience:'https://prontoayudatest.auth0.com/api/v2/',    
        scope: this.requestScopes
    });

    constructor(public router:Router){}

    login():void{
        this.auth0.authorize();

    }
    
       handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
         //console.log(authResult);
          if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this.setSession(authResult);
            this.router.navigate(['/admin']);
          } else if (err) {
            this.router.navigate(['/login']);
            console.log(err);
          }
        });
      }

    setSession(authResult):void{
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token',authResult.accessToken);
        localStorage.setItem('id_token',authResult.idToken);
        localStorage.setItem('expires_at',expiresAt);

        var token = localStorage.getItem('id_token');
        localStorage.setItem('rol_user',this.jwtHelper.decodeToken(token)['http://prontoayudatest/roles'])
    }

    
    logout():void{
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('rol_user');
    }

    isAuthenticated():boolean{
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt
    }

    getProfile(cb):void{
        const accessToken=localStorage.getItem('access_token');
        if (!accessToken){
            throw new Error('Access token must exist to fetch profile');
        }
        const self=this;
        this.auth0.client.userInfo(accessToken,(err,profile)=>{
            if(profile){
                self.userProfile=profile;
                console.log(profile);
            }
            cb(err,profile);
        });
    }

}