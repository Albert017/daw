import { Routes, RouterModule } from '@angular/router';

import { HotPageComponent } from './hot-page/hot-page.component';
import { TrendingPageComponent} from './trending-page/trending-page.component';

const appRoutes = [
  { path: 'hot', component: HotPageComponent, useAsDefault: true },
  { path: '', redirectTo: 'hot', pathMatch: 'full' },
  { path: 'trending', component: TrendingPageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
