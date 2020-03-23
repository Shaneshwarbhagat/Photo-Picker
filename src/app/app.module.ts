import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';

import { AppRoutingModule } from './app-routing.module';

import { ConfigService } from './config.service';
import { GalleryComponent } from './user1/gallery/gallery.component';

@NgModule({
   declarations: [
      AppComponent,
      User1Component,
      User2Component,
      HomeComponent,
      GalleryComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [ConfigService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
