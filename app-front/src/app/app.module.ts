import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotPageComponent } from './hot-page/hot-page.component';


import { routing } from './app.routing';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserComponent } from './user/user.component';
import { PostIndexComponent } from './post/post-index.component';

import { ApiPostsService } from './api-posts.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './profile-following/profile-following.component';
import { ProfileReportUsersComponent } from './profile-report-users/profile-report-users.component';
import { ProfileReportPostsComponent } from './profile-report-posts/profile-report-posts.component';
import { ProfileReportCommentsComponent } from './profile-report-comments/profile-report-comments.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserFollowingComponent } from './user-following/user-following.component';
import { UserPostComponent } from './user-post/user-post.component';
//import { HttpClientComponent } from './http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotPageComponent,
    TrendingPageComponent,
    LogInComponent,
    UserComponent,
    PostIndexComponent,
    ProfilePageComponent,
    ProfilePostsComponent,
    ProfileFollowersComponent,
    ProfileFollowingComponent,
    ProfileReportUsersComponent,
    ProfileReportPostsComponent,
    ProfileReportCommentsComponent,
    UserProfileComponent,
    UserFollowersComponent,
    UserFollowingComponent,
    UserPostComponent
    //HttpClientComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, ApiPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }