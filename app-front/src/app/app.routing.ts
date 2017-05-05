import { Routes, RouterModule } from '@angular/router';

import { HotPageComponent } from './hot-page/hot-page.component';
import { TrendingPageComponent} from './trending-page/trending-page.component';
import { LogInComponent} from './log-in/log-in.component';

const appRoutes = [
  { path: 'hot', component: HotPageComponent, useAsDefault: true },
  { path: '', redirectTo: 'hot', pathMatch: 'full' },
  { path: 'trending', component: TrendingPageComponent},
  { path: 'login', component: LogInComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
