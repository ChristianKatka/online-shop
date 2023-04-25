import { createAction, props } from '@ngrx/store';

export const getShopItems = createAction('[ShopItems] Get Shop Items');
export const getShopItemsSuccess = createAction(
  '[ShopItems] Get Shop Items Success',
  props<{ shopItems: any[] }>()
);
export const getShopItemsFailure = createAction(
  '[ShopItems] Get Shop Items Failure',
  props<{ error: string }>()
);
