import { createSelector } from '@ngrx/store';
import { getShopItemsFeatureState } from '../reducers';

export const shopItemsUiState = createSelector(
  getShopItemsFeatureState,
  (state) => state.shopItemsUi
);

export const showBadgeOnShoppingCart = createSelector(
  shopItemsUiState,
  (state) => state.showBadgeOnShoppingCart
);

export const getShopItemsUiControlData = createSelector(
  shopItemsUiState,
  (state) => {
    return {
      listViewLayout: state.listViewLayout,
      showBadgeOnShoppingCart: state.showBadgeOnShoppingCart,
    };
  }
);
