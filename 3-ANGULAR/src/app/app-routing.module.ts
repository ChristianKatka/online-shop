import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeatureContainerComponent } from 'modules/Home/home-feature.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeFeatureContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
