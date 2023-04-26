import { Action, createReducer, on } from '@ngrx/store';
import { ShopItemsActions, ShopItemsUiActions } from '../actions';

export interface ShopItemsUiState {
  listViewLayout: 'list-view' | 'grid-view' | 'big-grid-view';
  showBadgeOnShoppingCart: boolean;
}

export const initialState: ShopItemsUiState = {
  listViewLayout: 'list-view',
  showBadgeOnShoppingCart: false,
};

const shopItemsUiReducer = createReducer(
  initialState,
  on(ShopItemsUiActions.selectListViewLayout, (state, { listViewLayout }) => {
    return {
      ...state,
      listViewLayout,
    };
  }),
  on(ShopItemsActions.addItemToShoppingCart, (state) => {
    return {
      ...state,
      showBadgeOnShoppingCart: true,
    };
  })

  // on(AuthenticatedActions.signOut, () => initialState)
);

export const reducer = (state: ShopItemsUiState | undefined, action: Action) =>
  shopItemsUiReducer(state, action);
