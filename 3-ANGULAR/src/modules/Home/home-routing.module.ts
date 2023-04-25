import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeatureContainerComponent } from './home-feature.container';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeFeatureContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
