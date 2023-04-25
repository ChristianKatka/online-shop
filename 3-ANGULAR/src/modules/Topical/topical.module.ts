import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { components } from '.';
import { MaterialModule } from '../../material.module';
import { TopicalRoutingModule } from './topical-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, TopicalRoutingModule, SharedModule],
  declarations: [...components],
  exports: [...components],
})
export class TopicalModule {}
