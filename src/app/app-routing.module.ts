import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CanvasTsXp1Component} from "./canvas_experiments/canvas-ts-xp1/canvas-ts-xp1.component";
import {FourofourComponent} from "./fourofour/fourofour.component";
import {HomeComponent} from "./home-component/home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {CodeZooComponent} from "./code-zoo/code-zoo.component";

const routes: Routes = [
  { path: 'canvas1', component: CanvasTsXp1Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about_me', component: AboutMeComponent},
  { path: 'code_zoo', component: CodeZooComponent},
  { path: '**', component: FourofourComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
