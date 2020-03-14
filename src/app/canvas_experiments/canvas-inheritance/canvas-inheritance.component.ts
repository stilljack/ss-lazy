import { Component, OnInit } from '@angular/core';
import {BaseCanvasExperimentsComponent} from "../base-canvas-experiments/base-canvas-experiments.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-canvas-inheritance',
  templateUrl: './canvas-inheritance.component.html',
  styleUrls: ['./canvas-inheritance.component.css']
})
export class CanvasInheritanceComponent
  extends BaseCanvasExperimentsComponent
  implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit(): void {

  }

}
