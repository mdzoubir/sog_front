import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { StoriesComponent } from './component/stories/stories.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { DonateComponent } from './component/donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponent,
    StoriesComponent,
    BlogsComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
