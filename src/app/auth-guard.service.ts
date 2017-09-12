import {Injectable} from '@angular/core'
import {CanActivate,CanActivateChild,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'

import {AuthService} from './auth.service'
@Injectable()

export class AuthGuardService implements CanActivate,CanActivateChild{

    constructor (private authService: AuthService,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
       let url:string=state.url;
       return this.checkLogin(url);
    }

    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        return this.canActivate(route,state);
     }

    checkLogin(url:string):boolean{
        if(this.authService.isLogged){return true;}

        this.authService.redirectUrl=url

        this.router.navigate(['/login']);
        
        return false;
    }
}