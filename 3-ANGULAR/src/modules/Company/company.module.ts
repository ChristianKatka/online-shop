import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { components } from '.';
import { MaterialModule } from '../../material.module';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, CompanyRoutingModule, SharedModule],
  declarations: [...components],
  exports: [...components],
})
export class CompanyModule {}
