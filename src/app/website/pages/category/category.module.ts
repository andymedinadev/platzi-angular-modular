import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from '@website/pages/category/category.component';
import { CategoryRoutingModule } from '@website/pages/category/category-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedModule],
})
export class CategoryModule {}
