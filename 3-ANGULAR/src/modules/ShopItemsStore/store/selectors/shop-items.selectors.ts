import { createSelector } from '@ngrx/store';
import { getShopItemsFeatureState } from '../reducers';

export const shopItemsState = createSelector(
  getShopItemsFeatureState,
  (state) => state.shopItems
);
export const getShopItemsControlData = createSelector(
  shopItemsState,
  (state) => {
    const firstTwentyItems = Object.values(state.entities).slice(0, 20);
    return {
      shopItemEntities: firstTwentyItems,
      shoppingCartItems: Object.values(state.shoppingCartItems),
    };
  }
);

export const getAmountOfShoppingCartItems = createSelector(
  shopItemsState,
  (state) =>
    Object.values(state.shoppingCartItems)
      ? Object.values(state.shoppingCartItems).length
      : 0
);
