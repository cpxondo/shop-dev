import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../shared/model';

@Injectable({
  providedIn: 'root'
})
export class RetrieveItemsService {

  private _baseUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._baseUrl);
  }
}
