import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from '../model';
import { RetrieveItemsService } from './retrieve-items.service';
import { Observable } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';

@Injectable()
export class ItemsResolver implements Resolve<Item> {

  constructor(private itemService: RetrieveItemsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Item> {
    const id = +route.paramMap.get('id');
    return this.itemService.getItem(id).pipe(
      take(1),
      map(item => {
        if (item) {
          return item;
        } else { // id not found
          this.router.navigate(['/items/1']);
          return null;
        }
      })
    );
  }
}
