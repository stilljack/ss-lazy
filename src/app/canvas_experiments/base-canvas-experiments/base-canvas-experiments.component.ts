import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-base-canvas-experiments',
  template: `
  `,
  styleUrls: ['./base-canvas-experiments.component.css']
})
export class BaseCanvasExperimentsComponent implements OnInit {

  constructor(public router: Router) { }
  openPage(routename: string) {
    this.router.navigateByUrl(`/${routename}`);
  }
  ngOnInit(): void {
  }

}
