import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from 'src/app/cms/cms-routing.module';
import { GridComponent } from 'src/app/cms/pages/grid/grid.component';
import { LayoutComponent } from 'src/app/cms/components/layout/layout.component';
import { TasksComponent } from 'src/app/cms/pages/tasks/tasks.component';

@NgModule({
  declarations: [GridComponent, TasksComponent, LayoutComponent],
  imports: [CommonModule, CmsRoutingModule],
})
export class CmsModule {}
