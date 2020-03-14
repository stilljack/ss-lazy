import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CanvasTsXp1Component } from './canvas_experiments/canvas-ts-xp1/canvas-ts-xp1.component';
import { HomeComponent } from './home-component/home.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CodeZooComponent } from './code-zoo/code-zoo.component';
import {CanvasrxComponent} from './canvas_experiments/canvas-ts-xp1/canvasrx.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Canvas2Component } from './canvas_experiments/canvas2/canvas2.component';
import { BaseCanvasExperimentsComponent } from './canvas_experiments/base-canvas-experiments/base-canvas-experiments.component';
import { CanvasInheritanceComponent } from './canvas_experiments/canvas-inheritance/canvas-inheritance.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CanvasTsXp1Component,
    HomeComponent,
    FourofourComponent,
    AboutMeComponent,
    CodeZooComponent,
    CanvasrxComponent,
    Canvas2Component,
    BaseCanvasExperimentsComponent,
    CanvasInheritanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
