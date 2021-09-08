import { BlogsComponent } from './component/blogs/blogs.component';
import { StoriesComponent } from './component/stories/stories.component';
import { AboutComponent } from './component/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './component/home/home.component';
import {DonateComponent} from './component/donate/donate.component';
import {LoginComponent} from './component/login/login.component';

const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'blog', component: BlogsComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
