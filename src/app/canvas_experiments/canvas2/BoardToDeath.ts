import * as data from './colors.json';
import {zip} from "rxjs";
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import svgjs from "svg.js";
import {element} from "protractor";
import {randomFill} from "crypto";
declare const SVG: any;

interface Colors {
  color: string;
  default: Array<string>;
}
// @ts-ignore
const colors: Array<Colors> = (data as Array<Colors>).default;
const colorsLength = colors.length;
console.log(colorsLength)
console.log(colors[0].color)
function getColor() {
  let matcherResult =Math.floor(Math.random()*colorsLength)

  let res= colors[matcherResult].color

  console.log(`matcher = ${matcherResult} res=${res}`)
  return res

}
class XYPair{
  x:number
  y:number
  constructor(x,y) {
    this.x = x
    this.y = y
  }
}
type DictionaryItem = [string, svgjs.Rect];
let custDictionary: DictionaryItem[];
custDictionary = [];
interface BoadRectDictionary<K,V>
{
  0: string,
  1: svgjs.Rect
};

export class BoardToDeath {
  constructor() {
  }

  draw: svgjs.Doc;
  viewBox: svgjs.ViewBox;
  zoom = svgjs.ViewBox.zoom;
  board;
  pattern;
  boardRectSet:svgjs.Set;
  rectDictionary: BoadRectDictionary<string, svgjs.Rect>[];

  public gradientDescent(draw, element) {
    let gradient = draw.gradient('linear', (stop) => {
      stop.at(0, '#333')
      stop.at(1, '#fff')
    });
    element.attr({fill: gradient})
  }

  public initCanvas(id: string, height: number, width: number) {
    console.log("height 1")
    console.log(height)
    height =height
    width = width
    console.log("height 2")
    console.log(height)
    this.draw = SVG('canvas').size(width, height);
    this.draw.viewbox({x: 0, y: 0, width, height});
    this.viewBox = this.draw.viewbox();
    this.zoom = this.viewBox.zoom;
    console.log(this.zoom)
    this.pattern = this.draw.pattern(20, 20, function (add) {
      add.rect(20, 20).fill(`#fEC`)
      add.circle(8).fill('#00ff00')
      add.rect(12, 18).move(10, 10)
    })
    this.board = this.draw.rect(width, height)
      .fill('#f66')
      .animate()
      .move(0, 0);
    this.board = this.board.fill(this.pattern);
    this.boardRectSet = this.draw.set()
    let subWidth = (width) / 10
    let subHeight = (height) / 10
    console.log("height 3")
    console.log(height)
    console.log("height 4")
    console.log(subHeight)

    //create the actual board
    for (let x = 0; x < 10; x++ ) {
      for (let y = 0; y < 10; y++) {
        // create some elements
        let tempId = `${x}-${y}`
        console.log(tempId)
        //let color = `#${x % 9}${x * y % 9}${(x + y) % 9}`
        let color =getColor()
        console.log(color)
        custDictionary[tempId] =this.draw.rect(subWidth, subHeight)
        console.log(custDictionary[tempId])
        console.log(`tempRect id = ${this.board}`)
        custDictionary[tempId].move(subWidth * x, subHeight * y)
        custDictionary[tempId].fill(getColor())
// create a set and add the elements

        this.boardRectSet.add(custDictionary[tempId])
        console.log(`boardRectSet length = ${this.boardRectSet.length()} `)

      }
    }

  }

  public onClickOne() {
    console.log("one called");
    // @ts-ignore
    //this.boardRectSet.animate().move(-300, -200);
    this.boardRectSet.each(
      (index,members)=> {
        console.log(this.boardRectSet.get(index))
        this.boardRectSet.get(index).attr({fill:getColor()})
      }
    )
    // for (let boardRectSetKey in this.boardRectSet) {
    //
    //   this.boardRectSet[boardRectSetKey].fill(getColor())
    //
    // }
  }

  public onClickTwo() {
    // @ts-ignore
    this.boardRectSet.fill(getColor())

    //this.boardRectSet.animate().move(100, 150);
  }

  public onClickThree() {

    // @ts-ignore
    this.boardRectSet.animate()
      .move(200, 100);
  }

}
