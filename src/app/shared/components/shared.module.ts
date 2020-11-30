import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {RouterModule} from '@angular/router';

const material = [
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    ...material,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ...material,
    ProductCardComponent
  ]
})
export class SharedModule{}
