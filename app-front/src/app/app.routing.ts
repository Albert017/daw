import { Routes, RouterModule } from '@angular/router';

import { HotPageComponent } from './hot-page/hot-page.component';
import { TrendingPageComponent} from './trending-page/trending-page.component';
import { LogInComponent} from './log-in/log-in.component';
import { PostIndexComponent} from './post/post-index.component';
import { ProfilePageComponent} from './profile-page/profile-page.component';
import { ProfilePostsComponent} from './profile-posts/profile-posts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RandomPageComponent } from './random-page/random-page.component';
import { TagsPageComponent } from './tags-page/tags-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserToolsComponent } from './user-tools/user-tools.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { ChangeAvatarPageComponent } from './change-avatar-page/change-avatar-page.component';
import { ChangeHeaderPageComponent} from './change-header-page/change-header-page.component';
import {EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { MessageNewComponent } from './message-new/message-new.component';
import { MessageReadComponent } from './message-read/message-read.component';

const appRoutes = [
  { path: 'hot', component: HotPageComponent, useAsDefault: true },
  { path: 'trending', component: TrendingPageComponent},
  { path: 'login', component: LogInComponent},
  { path: 'post', component: PostIndexComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'post/:id', component: PostIndexComponent},
  { path: 'user/:id', component: UserProfileComponent},
  { path: 'random', component: RandomPageComponent},
  { path: 'logOut', component: HotPageComponent},
  { path: 'tag/:tags', component: TagsPageComponent},
  { path: 'search/:find', component: SearchPageComponent},
  { path: 'settings', component: UserToolsComponent},
  { path: 'addPost', component: AddPostPageComponent},
  { path: 'changeAvatar', component: ChangeAvatarPageComponent},
  { path: 'changeHeader', component: ChangeHeaderPageComponent},
  { path: 'edit-profile', component: EditProfilePageComponent},
  { path: 'messages', component: MessagePageComponent},
  { path: 'newMessage', component: MessageNewComponent},
  { path: 'conversation', component: MessageReadComponent},
  { path: '', redirectTo: 'hot', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
