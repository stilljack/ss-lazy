import svgjs, {Rect} from "svg.js";
import {getColor} from "../../global_namespace";
declare const SVG: any;



class XYPair{
  x:number
  y:number
  constructor(x,y) {
    this.x = x
    this.y = y
  }
}

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
    this.draw = SVG('canvas').size(width, height);
    this.draw.viewbox({x: 0, y: 0, width, height});
    this.viewBox = this.draw.viewbox();
    this.zoom = this.viewBox.zoom;



    this.board = this.draw.rect(width, height)
      .fill('#f66')
      .animate()
      .move(0, 0);


    this.boardRectSet = this.draw.set()

    let subWidth = (width) / 10
    let subHeight = (height) / 10

    let color1 =getColor()
    let color2 =getColor()
    console.log(color1)
    console.log(color2)
    let alternate=0
    //create the actual board
    for (let x = 0; x < 10; x++ ) {
      for (let y = 0; y <10; y++) {
        // create some elements
        let tempId = `${x}-${y}`
        console.log(tempId)



        this.boardDictionary[tempId] =
          this.draw.rect(subWidth, subHeight)
        this.boardDictionary[tempId].move(subWidth * x, subHeight * y)
        if ( x % 2 == y % 2){
          console.log(alternate)
          this.boardDictionary[tempId].fill(color1)
          alternate = 1
        }
        else{
          console.log(alternate)
          alternate=0
          this.boardDictionary[tempId].fill(color2)
        }
// create a set and add the elements

        this.boardRectSet.add(this.boardDictionary[tempId])
        console.log(`boardRectSet length = ${this.boardRectSet.length().toString()} `)
      }
    }

  }

  public onClickOne() {
    console.log("one called");
    // @ts-ignore
    console.log(this.boardDictionary['0-2'].fill(getColor()))
    for (let key in this.boardDictionary) {
      this.boardDictionary[key].fill(getColor())
      console.log(`key equaly ${key} ${this.boardDictionary[key]
        .matrix([1,2,3,4,5,6])}. ${this.boardDictionary[key].dmove(10,10)}`)
    }

  }

  public onClickTwo() {
    // @ts-ignore
    //this.boardRectSet.fill(getColor())
    // for (let key in this.boardDictionary) {
    //   let currentRect = this.boardDictionary[key]
    // let currentX = currentRect.x()
    // let currentY = currentRect.y()
    // let c = currentRect.animate()
    //console.log(`rect equals ${currentRect.id()} x ${currentX} y ${currentY}`)
    //console.log(`key equals ${key} ${currentRect}`)
    // @ts-ignore
    // currentRect.fill(getColor())
    // currentRect
    //   .animate()
    //   .move( currentX+randomIntFromInterval(-20,30),
    //     currentY+randomIntFromInterval(-20,30))
    //
    //      }
    //this.boardRectSet.animate().move(100, 150);
    // }
  }

  public onClickThree() {
    // @ts-ignore
    this.boardRectSet.animate()
      .move(200, 100);

  }
}
// this.pattern = this.draw.pattern(20, 20, function (add) {
//   add.rect(20, 20).fill(`#fEC`)
//   add.circle(8).fill('#00ff00')
//   add.rect(12, 18).move(10, 10)
// })
// this.board = this.board.fill(this.pattern);
