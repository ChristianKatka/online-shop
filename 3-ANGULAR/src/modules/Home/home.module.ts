import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { components } from '.';
import { MaterialModule } from '../../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class HomeModule {}
