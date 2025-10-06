import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';
import { ExitGuard } from '@guards/exit.guard';
import { HomeComponent } from '@website/pages/home/home.component';
import { LayoutComponent } from '@website/components/layout/layout.component';
import { LoginComponent } from '@website/pages/login/login.component';
import { MyCartComponent } from '@website/pages/my-cart/my-cart.component';
import { ProductDetailComponent } from '@website/pages/product-detail/product-detail.component';
import { ProfileComponent } from '@website/pages/profile/profile.component';
import { RegisterComponent } from '@website/pages/register/register.component';
import { RecoveryComponent } from '@website/pages/recovery/recovery.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'category',
        loadChildren: () =>
          import('@website/pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
        data: {
          preload: true,
        },
      },
      { path: 'login', component: LoginComponent },
      { path: 'my-cart', component: MyCartComponent },
      {
        path: 'register',
        component: RegisterComponent,
        canDeactivate: [ExitGuard],
      },
      { path: 'recovery', component: RecoveryComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
