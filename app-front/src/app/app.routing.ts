import { Routes, RouterModule } from '@angular/router';

import { HotPageComponent } from './hot-page/hot-page.component';

const appRoutes = [
  { path: 'hot', component: HotPageComponent, useAsDefault: true },
  { path: '', redirectTo: 'hot', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
