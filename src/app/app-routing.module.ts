import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from 'src/app/website/pages/not-found/not-found.component';
import { CustomPreloadService } from 'src/app/services/custom-preload.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website/website.module').then((m) => m.WebsiteModule),
    data: {
      preload: true,
    },
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
