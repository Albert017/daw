import { Routes, RouterModule } from '@angular/router';

import { HotPageComponent } from './hot-page/hot-page.component';
import { TrendingPageComponent} from './trending-page/trending-page.component';
import { LogInComponent} from './log-in/log-in.component';
import { PostIndexComponent} from './post/post-index.component';

const appRoutes = [
  { path: 'hot', component: HotPageComponent, useAsDefault: true },
  { path: 'trending', component: TrendingPageComponent},
  { path: 'login', component: LogInComponent},
  { path: 'post', component: PostIndexComponent},
 // { path: 'post/:id', component: PostIndexComponent},
  { path: '', redirectTo: 'hot', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
