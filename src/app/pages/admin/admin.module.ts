import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AdminLayoutComponent } from '../../shared/layouts/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import {AuthGuard} from '../../shared/services/auth.guard';
import {MaterialModule} from '../../shared/components/material.module';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardPageComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'products/create',
      component: CreateProductPageComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'products/:id/edit',
      component: EditProductPageComponent,
      canActivate: [AuthGuard]
    }
  ]}
];

@NgModule({
  declarations: [AdminLayoutComponent, DashboardPageComponent, CreateProductPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AdminModule {
}
