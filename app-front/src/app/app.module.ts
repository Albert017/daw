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
import { BestPostsComponent } from './best-posts/best-posts.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { RandomPageComponent } from './random-page/random-page.component';
import { TagsPageComponent } from './tags-page/tags-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserToolsComponent } from './user-tools/user-tools.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { SettingsNotificationsComponent } from './settings-notifications/settings-notifications.component';
import { SettingsPasswordComponent } from './settings-password/settings-password.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { ChangeHeaderPageComponent } from './change-header-page/change-header-page.component';
import { ChangeAvatarPageComponent } from './change-avatar-page/change-avatar-page.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { MessageNewComponent } from './message-new/message-new.component';
import { MessageReadComponent } from './message-read/message-read.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
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
    UserPostComponent,
    BestPostsComponent,
    SocialNetworksComponent,
    RandomPageComponent,
    TagsPageComponent,
    SearchPageComponent,
    UserToolsComponent,
    SettingsPageComponent,
    SettingsNotificationsComponent,
    SettingsPasswordComponent,
    AddPostPageComponent,
    ChangeHeaderPageComponent,
    ChangeAvatarPageComponent,
    EditProfilePageComponent,
    MessagePageComponent,
    MessageNewComponent,
    MessageReadComponent,
    SignupPageComponent
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