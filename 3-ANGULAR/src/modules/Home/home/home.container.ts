import { Component } from '@angular/core';
import { fadeInOutAndSlideFromBottomAnimation } from './animations';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import { ShopItemsSelectors } from 'modules/ShopItemsStore/store/selectors';
import { ShopItemsActions } from 'modules/ShopItemsStore/store/actions';

@Component({
  selector: 'home-container',
  templateUrl: 'home.container.html',
  styleUrls: ['home.container.scss'],
  animations: [fadeInOutAndSlideFromBottomAnimation],
})
export class homeContainerComponent {
  shopItemsControlData$ = this.store.select(
    ShopItemsSelectors.getShopItemsControlData
  );

  constructor(private store: Store<fromRoot.State>) {}

  addItemToShoppingCart(selectedShopItem: any) {
    this.store.dispatch(
      ShopItemsActions.addItemToShoppingCart({ selectedShopItem })
    );
  }
}
