import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
  Action,
} from '@ngrx/store';
import * as fromShopItems from './shop-items.reducer';

// Used in module import forFeature to add this module state part of application state
export const featureKey = 'shopItemsFeature';

// Just a interface representing this feature AKA module slices of state
interface ShopItemsFeatureState {
  shopItems: fromShopItems.ShopItemsState;
}

// Unite this feature AKA module slices of state together
export const reducers: ActionReducerMap<ShopItemsFeatureState> = {
  shopItems: fromShopItems.reducer,
};

// Export feature state aka this modules state so selectors can use it and grab data what they want from the state
export const getShopItemsFeatureState =
  createFeatureSelector<ShopItemsFeatureState>(featureKey);
