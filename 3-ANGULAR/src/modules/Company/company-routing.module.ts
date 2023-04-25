import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFeatureContainerComponent } from './company-feature.container';

export const companyRoutes: Routes = [
  {
    path: '',
    component: CompanyFeatureContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(companyRoutes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
