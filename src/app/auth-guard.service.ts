import { Injectable }     from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router}    from '@angular/router';
import {GlobalEventsService} from "./global-events.service";

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private router: Router, private globalEventsService: GlobalEventsService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;

    return this.checkUser(url);
  }

  checkUser(url: string): boolean {

    if(this.globalEventsService.selectedUser == 'admin'){
      return true;
    }
    // Navigate to the login page with extras
    this.router.navigateByUrl('/not-allowed');
    return false;
  }
}
