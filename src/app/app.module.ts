import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/main/home-page/home-page.component';
import { ProductPageComponent } from './pages/main/product-page/product-page.component';
import { SharedModule } from './shared/components/shared.module';
import {AuthInterceptor} from './shared/services/auth.interceptor';
import {ApiInterceptor} from './shared/services/api.interceptor';
import {ToastrModule} from 'ngx-toastr';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: ApiInterceptor
};

const toastSettings = {
  timeOut: 5000,
  positionClass: 'toast-bottom-left',
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(toastSettings)
  ],
  providers: [API_INTERCEPTOR_PROVIDER, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
