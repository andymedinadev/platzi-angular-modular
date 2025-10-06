import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { QuicklinkModule } from 'ngx-quicklink';

import { HomeComponent } from '@website/pages/home/home.component';
import { LayoutComponent } from '@website/components/layout/layout.component';
import { LoginComponent } from '@website/pages/login/login.component';
import { MyCartComponent } from '@website/pages/my-cart/my-cart.component';
import { NavComponent } from '@website/components/nav/nav.component';
import { NotFoundComponent } from '@website/pages/not-found/not-found.component';
import { ProductDetailComponent } from '@website/pages/product-detail/product-detail.component';
import { ProfileComponent } from '@website/pages/profile/profile.component';
import { RecoveryComponent } from '@website/pages/recovery/recovery.component';
import { RegisterComponent } from '@website/pages/register/register.component';
import { WebsiteRoutingModule } from '@website/website-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    MyCartComponent,
    NavComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ProfileComponent,
    RecoveryComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    QuicklinkModule,
    SharedModule,
    SwiperModule,
    WebsiteRoutingModule,
  ],
})
export class WebsiteModule {}
