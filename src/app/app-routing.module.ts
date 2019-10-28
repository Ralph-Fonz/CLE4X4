import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './main/blog/blog.component';
import { ForumComponent } from './forum/forum.component';
import { StoreComponent } from './store/store.component';
import { SideBarComponent } from './main/side-bar/side-bar.component';

const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'forum', component: ForumComponent},
    {path: 'store', component: StoreComponent}  
  ]

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    declarations: [MainComponent, BlogComponent, ForumComponent, StoreComponent, SideBarComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [MainComponent, ForumComponent, StoreComponent, SideBarComponent]
