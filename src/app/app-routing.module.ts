import { BlogsComponent } from './component/blogs/blogs.component';
import { StoriesComponent } from './component/stories/stories.component';
import { AboutComponent } from './component/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './component/home/home.component';
import {DonateComponent} from './component/donate/donate.component';
import {LoginComponent} from './component/login/login.component';
import {UserProfilComponent} from './component/visitor/user-profil/user-profil.component';
import {AuthGuard} from './guards/auth.guard';
import {AfterAuthGuard} from './guards/after-auth.guard';
import {UpdateProfileComponent} from './component/visitor/update-profile/update-profile.component';
import {DetailsComponent} from './component/details/details.component';

const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'blog', component: BlogsComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'login', component: LoginComponent, canActivate:[AfterAuthGuard]},
  {path: 'user', children:[
      {path: 'profile', component: UserProfilComponent},
      {path: 'update', component: UpdateProfileComponent}
    ], canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
