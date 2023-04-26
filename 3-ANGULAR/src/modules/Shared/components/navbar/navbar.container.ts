import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import {
  ShopItemsSelectors,
  ShopItemsUiSelectors,
} from 'modules/ShopItemsStore/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss'],
})
export class NavbarContainerComponent {
  amountOfShoppingCartItems$: Observable<number> = this.store.select(
    ShopItemsSelectors.getAmountOfShoppingCartItems
  );
  showBadgeOnShoppingCart$ = this.store.select(
    ShopItemsUiSelectors.showBadgeOnShoppingCart
  );

  constructor(private store: Store<fromRoot.State>) {}
}
