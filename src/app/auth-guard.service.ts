import {Injectable} from '@angular/core'
import {CanActivate,CanActivateChild,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'

import {AuthService} from './auth.service'
@Injectable()

export class AuthGuardService implements CanActivate,CanActivateChild{

    constructor (private authService: AuthService,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
       let url:string=state.url;

       const rolRequired = (route.data as any).rolRequired;
       
       return this.checkLogin(url,rolRequired);
    }

    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{

        const rolRequired = (route.data as any).rolRequired;
        var user_rol=localStorage.getItem('rol_user');
        if(this.authService.isAuthenticated() && user_rol === rolRequired){return true;}

        this.router.navigate(['/welcome']);

        return false;
     }


    checkLogin(url:string,rol:string):boolean{

        if(this.authService.isAuthenticated()){return true;}

        this.router.navigate(['/login']);
        
        return false;
    }


}