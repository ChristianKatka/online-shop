import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ShopItemsService } from '../../services/shop-items.service';
import { ShopItemsActions } from '../actions';

@Injectable()
export class ShopItemsEffects {
  getShopItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopItemsActions.getShopItems),
      switchMap(() =>
        this.shopItemsService.getShopItems().pipe(
          map((shopItems) =>
            ShopItemsActions.getShopItemsSuccess({ shopItems })
          ),
          catchError((error: string) => {
            console.log(error);
            return of(
              ShopItemsActions.getShopItemsFailure({
                error: 'error creating post',
              })
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shopItemsService: ShopItemsService
  ) {}
}
