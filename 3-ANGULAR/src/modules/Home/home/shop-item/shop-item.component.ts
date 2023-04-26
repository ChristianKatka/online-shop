import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: 'shop-item.component.html',
  styleUrls: ['shop-item.component.scss'],
})
export class ShopItemComponent {
  @Input()
  shopItem: any;

  @Output()
  addItemToShoppingCart = new EventEmitter();

  addToShoppingCart(selectedShopItem: any) {
    this.addItemToShoppingCart.emit(selectedShopItem);
  }
}
