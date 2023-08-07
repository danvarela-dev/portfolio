import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './componets/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  {
    path: '**',
    redirectTo: 'about-me',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutMeRoutingModule {}
