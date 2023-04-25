import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockItems } from './mock-items';

@Injectable({
  providedIn: 'root',
})
export class ShopItemsService {
  getShopItems(): Observable<any> {
    return of(mockItems);
  }
}
