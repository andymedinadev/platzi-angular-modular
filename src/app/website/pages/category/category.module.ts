import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from 'src/app/website/pages/category/category.component';
import { CategoryRoutingModule } from 'src/app/website/pages/category/category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedModule],
})
export class CategoryModule {}
