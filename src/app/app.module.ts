import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { StoriesComponent } from './component/stories/stories.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { DonateComponent } from './component/donate/donate.component';
import { LoginComponent } from './component/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserProfilComponent } from './component/visitor/user-profil/user-profil.component';
import {JwtInterceptor} from './services/jwt.interceptor';
import { UpdateProfileComponent } from './component/visitor/update-profile/update-profile.component';
import { DetailsComponent } from './component/details/details.component';
import {GirlService} from './services/girl.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponent,
    StoriesComponent,
    BlogsComponent,
    DonateComponent,
    LoginComponent,
    UserProfilComponent,
    UpdateProfileComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GirlService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
