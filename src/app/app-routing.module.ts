import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/cms/components/layout/layout.component';
import { CmsModule } from './modules/cms/cms.module';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CmsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
