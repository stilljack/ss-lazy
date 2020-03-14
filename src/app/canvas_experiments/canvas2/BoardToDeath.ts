import * as data from './colors.json';
import {zip} from "rxjs";
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import svgjs from "svg.js";
declare const SVG: any;

interface Colors {
  color: string;
  default: Array<string>;
}
const colors: Array<Colors> = (data as Array<Colors>);
const colorsLength: number = colors.length;


export class BoardToDeath {
  constructor() {
  }

  public gradientDescent(draw, element) {
    let gradient = draw.gradient('linear', (stop) => {
      stop.at(0, '#333')
      stop.at(1, '#fff')
    });
    element.attr({fill: gradient})
  }

  public initCanvas(id: string, height: number, width: number) {
    this.draw = SVG('canvas').size(width, height);
    this.draw.viewbox({x: 0, y: 0, width: 297, height: 210});
    this.viewBox = this.draw.viewbox();
    this.zoom = this.viewBox.zoom;
    console.log(this.zoom)
    this.pattern = this.draw.pattern(20, 20, function (add) {
    add.rect(20, 20).fill('#f06')
    add.rect(10, 10)
    add.rect(10, 10).move(10, 10)
  })
    this.board = this.draw.rect(width / 2, height / 2)
      .fill('#f03')
      .animate()
      .move(0, 0);
    this.board = this.board.fill(this.pattern);
  }

  public onClickOne() {
    console.log("one called");
    this.board.animate().move(-300, -200);
  }

  public onClickTwo() {
    this.board.animate().move(100, 150);
  }

  public onClickThree() {
    this.board.animate()
      .move(200, 100);
  }

  draw: svgjs.Doc;
  viewBox: svgjs.ViewBox;
  zoom = svgjs.ViewBox.zoom;
  board;
  pattern;
}
