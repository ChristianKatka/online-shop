import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/store';
import { Store } from '@ngrx/store';
import { ShopItemsActions } from 'modules/ShopItemsStore/store/actions';

@Component({
  templateUrl: 'home-feature.container.html',
})
export class HomeFeatureContainerComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(ShopItemsActions.getShopItems());
  }
}
