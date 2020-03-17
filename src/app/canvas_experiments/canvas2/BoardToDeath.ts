import * as data from './colors.json';
import {zip} from "rxjs";
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import svgjs, {Rect} from "svg.js";
import {element} from "protractor";
import {randomFill} from "crypto";
import Global = WebAssembly.Global;
import {getColor, randomIntFromInterval} from "../../global_namespace";
import {symlink} from "fs";
import {installTempPackage} from "@angular/cli/tasks/install-package";
import {keyframes} from "@angular/animations";
import enumerate = Reflect.enumerate;
import {withIdentifier} from "codelyzer/util/astQuery";
import {scheduleMacroTaskWithCurrentZone} from "zone.js/lib/common/utils";
declare const SVG: any;


//lets get this osmewhe

class XYPair{
  x:number
  y:number
  constructor(x,y) {
    this.x = x
    this.y = y
  }
}

// type DictionaryItem = [string, svgjs.Rect];
// interface BoadRectDictionary< string,V>
// {
//   key: string,
//   value: svgjs.Rect
// };
//   rectDictionary: BoadRectDictionary<string, svgjs.Rect>[];
//   custDictionary: DictionaryItem[] = []
export class RectDict<String,Rect>
{
  key:String
value:Rect
}
export class BoardToDeath {
  constructor() {
  }

  draw: svgjs.Doc;
  viewBox: svgjs.ViewBox;
  zoom = svgjs.ViewBox.zoom;
  board;
  pattern;
  boardRectSet:svgjs.Set;
  boardDictionary: { [key: string]: svgjs.Rect } = {};
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
        // let item:string = this.draw.rect(subWidth, subHeight)
        //   .id().toString()
        // console.log(`id of rect = ${item}`)

        this.boardDictionary[tempId] =this.draw.rect(subWidth, subHeight)
        console.log(`id of rect = ${this.boardDictionary[tempId]}`)
        console.log(`we only need to keep our eyes open ${this.boardDictionary[tempId]}`)

        console.log((this.boardDictionary)[tempId].toString)
        console.log(`tempRect id = ${this.board}`)
        this.boardDictionary[tempId].move(subWidth * x, subHeight * y)
        this.boardDictionary[tempId].fill(getColor())
// create a set and add the elements

        this.boardRectSet.add(this.boardDictionary[tempId])
        console.log(`boardRectSet length = ${this.boardRectSet.length()} `)
        console.log(`custDictionary length = ${this.boardDictionary.toString()} `)
      }
    }

  }

  public onClickOne() {
    console.log("one called");
    // @ts-ignore
    console.log(this.boardDictionary['0-2'].fill(getColor()))
    for (let custDictionaryKey in this.boardDictionary) {
      this.boardDictionary[custDictionaryKey].fill(getColor())
      console.log(`key equaly ${custDictionaryKey} ${this.boardDictionary[custDictionaryKey]
        .matrix([1,2,3,4,5,6])}. ${this.boardDictionary[custDictionaryKey].length}`)
    }

  }

  public onClickTwo() {
    // @ts-ignore
    //this.boardRectSet.fill(getColor())
   for (let key in this.boardDictionary)
   {
     let currentRect= this.boardDictionary[key]
     let currentX = currentRect.x()
     let currentY = currentRect.y()
     let c = currentRect.animate()
     //console.log(`rect equals ${currentRect.id()} x ${currentX} y ${currentY}`)
     console.log(`key equals ${key} ${currentRect}`)
      // @ts-ignore
     currentRect.fill(getColor())
     currentRect
       .animate()
       .move( currentX+randomIntFromInterval(-20,30),
         currentY+randomIntFromInterval(-20,30))

          }
    //this.boardRectSet.animate().move(100, 150);
  }

  public onClickThree() {
  alert(this.draw.children())
    // @ts-ignore
    this.boardRectSet.animate()
      .move(200, 100);
  }

}
