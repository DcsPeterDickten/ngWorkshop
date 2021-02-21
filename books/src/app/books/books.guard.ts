import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot): boolean {

    const isbn: string = route.params['isbn'] || '';
    console.log({ isbn });
    return isbn.endsWith('0');
  }

}
