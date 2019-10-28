import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';
import { AboutInfoComponent } from './main/side-bar/about-info/about-info.component';
import { PopularPostsComponent } from './main/side-bar/popular-posts/popular-posts.component';
import { SubscribeComponent } from './main/side-bar/subscribe/subscribe.component';
import { AdvertisingComponent } from './main/side-bar/advertising/advertising.component';
import { TagsComponent } from './main/side-bar/tags/tags.component';
import { InspirationsComponent } from './main/side-bar/inspirations/inspirations.component';
import { ForumComponent } from './forum/forum.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StoreComponent,
    AboutInfoComponent,
    PopularPostsComponent,
    SubscribeComponent,
    AdvertisingComponent,
    TagsComponent,
    InspirationsComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


