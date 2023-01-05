import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { TunesComponent } from './views/tunes/tunes.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tunes', component: TunesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
