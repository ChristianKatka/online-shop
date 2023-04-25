import { Action, createReducer, on } from '@ngrx/store';
import { groupBy } from '@shared/utils/group-by';
import { ShopItemsActions } from '../actions';

export interface ShopItemsState {
  entities: { [id: string]: any };
}

export const initialState: ShopItemsState = {
  entities: {},
};

const shopItemsReducer = createReducer(
  initialState,
  on(ShopItemsActions.getShopItemsSuccess, (state, { shopItems }) => {
    const entities = groupBy(shopItems);
    return {
      ...state,
      entities,
    };
  })

  // on(AuthenticatedActions.signOut, () => initialState)
);

export const reducer = (state: ShopItemsState | undefined, action: Action) =>
  shopItemsReducer(state, action);
