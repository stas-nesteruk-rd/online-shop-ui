import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'product/create', component: CreateProductPageComponent},
      {path: 'product/:id/edit', component: EditProductPageComponent}
  ]}
];

@NgModule({
  declarations: [AdminLayoutComponent, DashboardPageComponent, CreateProductPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AdminModule {
}
