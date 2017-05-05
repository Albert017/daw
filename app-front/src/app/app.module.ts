import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotPageComponent } from './hot-page/hot-page.component';


import { routing } from './app.routing';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserComponent } from './user/user.component';
import { HttpClientComponent } from './http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotPageComponent,
    TrendingPageComponent,
    LogInComponent,
    UserComponent,
    HttpClientComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
