import { ProblemsService } from '@core/services';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProblemGuard implements CanActivate {
  constructor(private router: Router, private problems: ProblemsService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.problems.getById(Number(route.params['id']))) {
      this.router.navigate(['/']);
      return false;
    } else return true;
  }
}
