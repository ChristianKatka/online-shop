import { createSelector } from '@ngrx/store';
import { getShopItemsFeatureState } from '../reducers';

export const shopItemsState = createSelector(
  getShopItemsFeatureState,
  (state) => state.shopItems
);
export const getShopItemsControlData = createSelector(
  shopItemsState,
  (state) => {
    return { shopItemEntities: Object.values(state.entities) };
  }
);
