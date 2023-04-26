import { createAction, props } from '@ngrx/store';

export const getShopItems = createAction('[ShopItems] Get Shop Items');
export const getShopItemsSuccess = createAction(
  '[Shop Items] Get Shop Items Success',
  props<{ shopItems: any[] }>()
);
export const getShopItemsFailure = createAction(
  '[Shop Items] Get Shop Items Failure',
  props<{ error: string }>()
);

export const addItemToShoppingCart = createAction(
  '[Shop Items] Add Item To Shopping Cart',
  props<{ selectedShopItem: any }>()
);
