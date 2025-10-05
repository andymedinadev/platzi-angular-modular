import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { CategoryComponent } from './pages/category/category.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { ImgComponent } from './components/img/img.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
  declarations: [
    CategoryComponent,
    HighlightDirective,
    HomeComponent,
    ImgComponent,
    LayoutComponent,
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
  imports: [CommonModule, SwiperModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
