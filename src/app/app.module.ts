import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { TunesComponent } from './views/tunes/tunes.component';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
import { TunesSearchFormComponent } from './components/tunes/tunes-search-form/tunes-search-form.component';
import { TunesListComponent } from './components/tunes/tunes-list/tunes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TunesSongComponent } from './components/tunes/tunes-song/tunes-song.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TunesComponent,
    TheNavigationComponent,
    TunesSearchFormComponent,
    TunesListComponent,
    TunesSongComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
