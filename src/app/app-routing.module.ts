import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/main/home-page/home-page.component';
import { ProductPageComponent } from './pages/main/product-page/product-page.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'products/:id', component: ProductPageComponent}
  ]},
  {
    path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
