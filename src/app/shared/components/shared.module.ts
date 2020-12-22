import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {RouterModule} from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    ProductCardComponent,
    LoginModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProductCardComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class SharedModule{}
