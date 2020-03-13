import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AboutMeDataSource, AboutMeItem } from './about-me-datasource';
import {getTemplate} from "codelyzer/util/ngQuery";
import { InlineSVGModule } from 'ng-inline-svg';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']

})

export class AboutMeComponent implements AfterViewInit, OnInit {


  @ViewChild(MatTable) table: MatTable<AboutMeItem>;

 card1 = `<mat-card>
  <img mat-card-lg-image src="assets/images/me.jpg">
  <mat-card-title>That's me! Jack Seymour!</mat-card-title>
  <mat-card-subtitle>Give me money!</mat-card-subtitle>
<mat-card-content><a href="#cv">My CV</a>ng se
  </mat-card-content>
</mat-card>
<mat-card>`;

  svg = 'assets/images/androidsvg.svg';
  cssLiteral = `float:left; width: 100%;height=600px`;

  dataSource: AboutMeDataSource;
  tiles: Tile[] = [
    {text: this.card1, cols: 3, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: this.cssLiteral},
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AboutMeDataSource();
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }

}
