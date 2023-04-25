import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from 'modules/Home/home.module';
import { ShopItemsStoreModule } from 'modules/ShopItemsStore/shop-items-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { RouterStateSerializer } from './store/router-state.serializer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: RouterStateSerializer,
    }),
    StoreDevtoolsModule.instrument(),
    HomeModule,
    SharedModule,
    ShopItemsStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
