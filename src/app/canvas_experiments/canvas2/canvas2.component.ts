import { Component, OnInit } from '@angular/core';
declare const SVG: any;
import * as data from './colors.json';
import {finalize} from "rxjs/operators";

interface Colors {
  color: string;
}


// @ts-ignore
const colors: Array<Colors> = (data as Array<Colors>).default;
const colorsLength: number = colors.length;
@Component({
  selector: 'app-canvas2',
  templateUrl: './canvas2.component.html',
  styleUrls: ['./canvas2.component.css']
})
export class Canvas2Component implements OnInit {

  constructor() { }

  private getNextColor(index): [string, number] {

    if (index <= colorsLength) {
      let fin = colors[index++];
      console.log(` first result index = ${index} \n fin = ${fin.color}`)
      return [colors[index++].color, index++];
    } else {
      let fin = colors[0];
       console.log(`second index = ${index} \n fin = ${fin.color}`)
      return [colors[0].color, 0];
    }
  }
  ngOnInit(): void {
    // colors.forEach   ((value)=>
    //   console.log(value.color));

    console.log()
    if (SVG.supported) {
      let draw = SVG('canvas').size('100%', '100%');
      let rect = draw.rect(100,100)
        .animate()
        .fill('#f03')
        .move(100, 100);

      let text = draw.text('This is just the start, ')

      text.build(true)  // enables build mode
      let gradient = draw.gradient('linear', (stop) => {
        stop.at(0, '#333')
        stop.at(1, '#fff')
      })
      rect.attr({fill: gradient})
      let tspan = text.tspan('something pink in the middle ')
      text.plain('and again boring at the end.')

      text.build(false)

      tspan.animate('2s').fill('#f06');
      let fin = this.getNextColor(120);
      // @ts-ignore
      console.log(`fin final equals ${fin}`);
      rect.attr({fill: fin[0]})
    } else {
      alert('SVG not supported');
    }
  }
  private gradientDescent(draw,element) {
    let gradient = draw.gradient('linear', (stop) => {
      stop.at(0, '#333')
      stop.at(1, '#fff')
    });
    element.attr({fill: gradient})
  }
}
