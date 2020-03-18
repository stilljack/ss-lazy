import svgjs, {Rect} from "svg.js";
import {getColor, randomIntRange} from "../../global_namespace";
declare const SVG: any;
import * as colorLib from 'color';
import {kebabToCamelCase} from "codelyzer/util/utils";
import {inspect} from "util";
import {requiresInlineTypeCtor} from "@angular/compiler-cli/src/ngtsc/typecheck/src/type_constructor";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";
import {style} from "@angular/animations";



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
  subWidth;
  subHeight;
  penguin:svgjs.Image;
  penguinOffset:XYPair;
  goal:svgjs.Element;
  color1;
  color2;
  boardDictionary: { [key: string]: svgjs.Rect } = {};


  public gradientDescent(draw, element) {
    let gradient = draw.gradient('linear', (stop) => {
      stop.at(0, '#333')
      stop.at(1, '#fff')
    });
    element.attr({fill: gradient})
  }

  public initCanvas(id: string, height: number, width: number) {
    console.log(height)
    console.log(width)
    if (height<width){
      width = height
    }
    else{
      height = width
    }
    console.log(height)
    console.log(width)
    this.draw = SVG('canvas').size(width, height);
    this.draw.viewbox({x: 0, y: 0, width, height});
    this.viewBox = this.draw.viewbox();
    this.zoom = this.viewBox.zoom;



    this.board = this.draw.rect(width, height)
      .fill('#000')
      .animate()
      .move(0, 0);


    this.boardRectSet = this.draw.set()

    this.subWidth = (width) / 10
    this.subHeight = (height) / 10

    this.color1 =getColor().color
    this.color2 =getColor().color
    console.log(this.color1)
    console.log(this.color2)

    //create the actual board
    for (let x = 0; x < 10; x++ ) {
      for (let y = 0; y <10; y++) {
        // create some elements
        let newRectId = `${x}-${y}`
        console.log(newRectId)

        let newRect =
          this.boardDictionary[newRectId] =
            this.draw.rect(this.subWidth, this.subHeight)
              .move(this.subWidth * x, this.subHeight * y)


        if ( x % 2 == y % 2){
          newRect.fill(this.color1)
        }
        else{
          newRect.fill(this.color2)
        }

        //set on click event for board tiles to onClickBox with context of itself
        let colorTrans1= colorLib.rgb().hex(getColor().color).negate()
        let colorTrans2 = colorLib.rgb().hex(getColor().color).negate()
        let radial =this.draw.gradient('radial',
          (stop) => {
            stop.at(0, colorTrans1.toString() )
            stop.at(1, colorTrans2.toString()),
              stop.at(2,"#000")
          })
        newRect.data('radial',radial,true)
        console.log(newRect.data('radial'))
        newRect.on('click',
          this.onClickBox)

// add new rect to set
        this.boardRectSet.add(this.boardDictionary[newRectId])
        console.log(`boardRectSet length = ${this.boardRectSet.length().toString()} `)
      }
    }

    //set up goal
    //there's better ways to do this animation, and id love to come back to it but this is fine and this project is getting out of scope.
    //know I regret this code although I thought the final call back structure was cute, and almost... chroreographic.
    this.setUpGoal(
      this.goal =this.boardRectSet.get(randomIntRange(0,this.boardRectSet.length()))
    )
    let xyFinal=new XYPair(this.goal.x(),this.goal.y())
    console.log(`xyfinal =x ${xyFinal.x}y ${xyFinal.y} goal x y = ${this.goal.x()} ${this.goal.y()}`)

   this.goal.animate(300).x(
      this.goal.x()+50
    )
    this.goal.animate(250).x(
      this.goal.x()-50
    )
    this.goal.animate(200).move(xyFinal.x,xyFinal.y)

       this.goal.animate(150).x(
      this.goal.x()+30
    )
    this.goal.animate(120).x(
      this.goal.x()-30
    )
    this.goal.animate(100).move(xyFinal.x,xyFinal.y)

    //begin penguin init
    console.log(`subheight = ${this.subHeight} width = ${this.subWidth}`)
    this.penguin = this.draw.image('../assets/penguin-svgrepo-com.svg',this.subHeight,this.subWidth)
    this.penguinOffset= new XYPair(0,0)
    this.penguin.move(this.penguinOffset.x, this.penguinOffset.y)
    // this.penguin.move(this.penguinOffset.x+this.subWidth+this.subWidth+this.subWidth,this.penguinOffset.y+this.subHeight+this.subHeight)

    //wait for user input
  }




  public setUpGoal(rect:svgjs.Element) {
    let x =rect.x()
    let y = rect.y()
    // console.log(`x=${x} y = ${y}`)
    let change= 5
    let modx = this.subHeight/change
    let mody = this.subWidth/(change-1)
    console.log(`x=${x} modx = ${modx} y = ${y} mody=${mody}`)
    x += modx
    y += mody

    let color =rect.attr('fill')
    let finalColor= colorLib.rgb().hex(color).negate().toString()
    console.log(finalColor)
    let text1 =
      this.draw
        .text('GOAL!')
        .font({
          family:   'Monospace'
          , size:     24
          , anchor:   'left'
          , weight: 'bold'
          , style: 'normal'
        })
        .fill(finalColor)
        .animate(200).move(x , y)



    console.log(`x=${x} y = ${y}`)
    // text.build(true)  // enables build mode
    //
    // var tspan = text.tspan('something pink in the middle ')
    // text.plain('and again boring at the end.')
    //
    // text.build(false) // disables build mode



  }


  public penguinTurn() {



  }
  public movePenguin(penguin:svgjs.Image,moveTo:svgjs.Rect){
    let movetoX = moveTo.x()
    let movetoY = moveTo.y()
    penguin
      .animate()
      .move(movetoX+this.penguinOffset.x, movetoY+this.penguinOffset.y)

  }

  public makeBlock(target:svgjs.Rect){


  }

  public onClickBox() {
    // @ts-ignore
    let workRect:svgjs.Rect =this
    if (workRect.data('isBlocked')){
      console.log("blocked")
    }
    else{
      console.log(workRect.data("radial"))
      workRect.fill(workRect.data('radial'))


      //oh yeah this... this is fucked, i hate typescript so much.
      workRect.data( 'isBlocked', { value: true })
      let applyBlockeddata =workRect.data('isBlocked')
      console.log(applyBlockeddata.value)
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

    let x=randomIntRange(0,9)
    let y=randomIntRange(0,9)
    let moveToSquare=this.boardDictionary[`${x}-${y}`]
    console.log(moveToSquare.id())
    this.movePenguin(this.penguin,moveToSquare)
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
