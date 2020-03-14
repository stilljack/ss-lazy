import {Component, Input, OnInit} from '@angular/core';
declare const SVG: any;
import * as data from './colors.json';
import {finalize} from "rxjs/operators";
import {BaseCanvasExperimentsComponent} from "../base-canvas-experiments/base-canvas-experiments.component";
import {Router} from "@angular/router";
import {createKeyboardEvent} from "@angular/cdk/testing/testbed/fake-events";
import {BoardToDeath} from "./BoardToDeath"
// @ts-ignore

@Component({
  selector: 'app-canvas2',
  templateUrl: './canvas2.component.html',
  styleUrls: ['./canvas2.component.css']
})
export class Canvas2Component
  extends BaseCanvasExperimentsComponent
  implements OnInit {

btd = new BoardToDeath()
  @Input() public width = Math.ceil(parent.innerWidth / 1.153) ;
  @Input() public height = Math.ceil(parent.innerHeight / 1.15);
  constructor(public router: Router) {
    super(router);
  }
  public onClickOne() {
    console.log( "one called");
    this.btd.onClickOne()
  }
  public onClickTwo() {
    this.btd.onClickTwo()
  }
  public onClickThree() {
    this.btd.onClickThree()
  }


  ngOnInit(): void {
    // colors.forEach   ((value)=>
    //   console.log(value.color));


    if (SVG.supported) {
      this.btd.initCanvas('canvas', this.height, this.width);
    } else {
      alert('SVG not supported');
    }
  }

      // text.build(true)  // enables build mode
      // let gradient = draw.gradient('linear', (stop) => {
      //   stop.at(0, '#333')
      //   stop.at(1, '#fff')
      // })
      // rect.attr({fill: gradient})
      // let tspan = text.tspan('something pink in the middle ')
      // text.plain('and again boring at the end.')
      //
      // text.build(false)
      //
      // tspan.animate('2s').fill('#f06');
      // let fin = this.getNextColor(120);
      // @ts-ignore




}
