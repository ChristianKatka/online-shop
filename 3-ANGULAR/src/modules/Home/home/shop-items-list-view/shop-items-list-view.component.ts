import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shop-items-list-view',
  templateUrl: 'shop-items-list-view.component.html',
  styleUrls: ['shop-items-list-view.component.scss'],
})
export class ShopItemListViewComponent {
  @Input()
  shopItemEntities: any[] = [];

  @Output()
  addItemToShoppingCart = new EventEmitter();
}
