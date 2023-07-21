import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/cms/components/layout/layout.component';
import { CmsModule } from './modules/cms/cms.module';

const routes: Routes = [{ path: '', component: LayoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CmsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
