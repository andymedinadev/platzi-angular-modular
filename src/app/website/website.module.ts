import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { QuicklinkModule } from 'ngx-quicklink';

import { HomeComponent } from 'src/app/website/pages/home/home.component';
import { LayoutComponent } from 'src/app/website/components/layout/layout.component';
import { LoginComponent } from 'src/app/website/pages/login/login.component';
import { MyCartComponent } from 'src/app/website/pages/my-cart/my-cart.component';
import { NavComponent } from 'src/app/website/components/nav/nav.component';
import { NotFoundComponent } from 'src/app/website/pages/not-found/not-found.component';
import { ProductDetailComponent } from 'src/app/website/pages/product-detail/product-detail.component';
import { ProfileComponent } from 'src/app/website/pages/profile/profile.component';
import { RecoveryComponent } from 'src/app/website/pages/recovery/recovery.component';
import { RegisterComponent } from 'src/app/website/pages/register/register.component';
import { WebsiteRoutingModule } from 'src/app/website/website-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
