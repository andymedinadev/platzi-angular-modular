import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { HighlightDirective } from './website/directives/highlight.directive';
import { HomeComponent } from './website/pages/home/home.component';
import { ImgComponent } from './website/components/img/img.component';
import { LoginComponent } from './website/pages/login/login.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { NavComponent } from './website/components/nav/nav.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { ProductComponent } from './website/components/product/product.component';
import { ProductsComponent } from './website/components/products/products.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { ReversePipe } from './website/pipes/reverse.pipe';
import { TimeAgoPipe } from './website/pipes/time-ago.pipe';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HighlightDirective,
    HomeComponent,
    ImgComponent,
    LoginComponent,
    MyCartComponent,
    NavComponent,
    NotFoundComponent,
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProfileComponent,
    RecoveryComponent,
    RegisterComponent,
    ReversePipe,
    TimeAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
