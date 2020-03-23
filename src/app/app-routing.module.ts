import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './user1/gallery/gallery.component';

const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'User1', component: User1Component},
  {path: 'User2', component: User2Component},
  {path: 'Gallery', component: GalleryComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true } )
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
