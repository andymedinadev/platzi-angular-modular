import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { HighlightDirective } from '@shared/directives/highlight.directive';
import { ImgComponent } from '@shared/components/img/img.component';
import { ProductComponent } from '@shared/components/product/product.component';
import { ProductsComponent } from '@shared/components/products/products.component';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
  ],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports: [
    HighlightDirective,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
  ],
})
export class SharedModule {}
