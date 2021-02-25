import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot): boolean {

    const isbn: string = route.params['isbn'] || '';
    console.log({ isbn });
    return true; // isbn.endsWith('0');
  }

}
