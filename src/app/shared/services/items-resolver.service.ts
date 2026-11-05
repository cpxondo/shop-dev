import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from '../model';
import { RetrieveItemsService } from './retrieve-items.service';
import { Observable, of } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolver  {

  constructor(private itemService: RetrieveItemsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Item> {
    const id = Number(route.paramMap.get('id') ?? 0);
    const auxItem: Item = {
      id: 0,
      name: '',
      available: false,
      description: '',
      price: 0,
      currency: ''
    };
    return this.itemService.getItem(id).pipe(
      take(1),
      map(item => item ?? auxItem),
      catchError(val => {
        console.error(val, 'Failure!');
        this.router.navigate(['/items/1']);
        return of(auxItem);
      })
    );
  }
}
