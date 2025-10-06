import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from '@cms/cms-routing.module';
import { GridComponent } from '@cms/pages/grid/grid.component';
import { LayoutComponent } from '@cms/components/layout/layout.component';
import { TasksComponent } from '@cms/pages/tasks/tasks.component';

@NgModule({
  declarations: [GridComponent, TasksComponent, LayoutComponent],
  imports: [CommonModule, CmsRoutingModule],
})
export class CmsModule {}
