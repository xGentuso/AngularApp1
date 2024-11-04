import { Injectable } from "@angular/core";
import {
 ActivatedRouteSnapshot, RouterStateSnapshot,
 Router
} from "@angular/router";
import { ConservationComponent } from "./booking/conservation.component";
@Injectable()
export class authGuard {
 private firstNavigation = true;
 constructor(private router: Router) { }
 canActivate(route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): boolean {
 if (this.firstNavigation) {
 this.firstNavigation = false;
 if (route.component != ConservationComponent) {
 this.router.navigateByUrl("/");
 return false;
 }
 }
 return true;
 }
}