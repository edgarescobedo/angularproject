import {Injectable} from '@angular/core'
import {CanActivate,CanActivateChild,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'

import {AuthService} from './auth.service'
@Injectable()

export class AuthGuardService implements CanActivate{

    constructor (private authService: AuthService,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
       let url:string=state.url;

       var rolRequired = (route.data as any).rolRequired;

       if (!rolRequired) {rolRequired='nothing';}

       return this.checkLogin(url,rolRequired);
    }

    checkLogin(url:string,rol:string):boolean{

        if (rol ==='nothing')
        {
            if(this.authService.isAuthenticated()){return true;}
            this.router.navigate(['/login']);
        }else{
            var user_rol=localStorage.getItem('rol_user');
            if(this.authService.isAuthenticated() && rol === user_rol){return true;}
            this.router.navigate(['/admin']);
        }

        return false;
    }


}