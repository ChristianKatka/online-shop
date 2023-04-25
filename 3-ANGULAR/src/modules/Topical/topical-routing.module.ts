import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicalFeatureContainerComponent } from './topical-feature.container';

export const topicalRoutes: Routes = [
  {
    path: '',
    component: TopicalFeatureContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(topicalRoutes)],
  exports: [RouterModule],
})
export class TopicalRoutingModule {}
