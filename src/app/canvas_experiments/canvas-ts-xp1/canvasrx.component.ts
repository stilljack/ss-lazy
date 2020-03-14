import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {NONE_TYPE} from "@angular/compiler";

@Component({
  selector: 'app-canvas',
  template: '<canvas #canvas></canvas>',
  styles: ['canvas { border: 2px solid #000;alignment: center;}']
})
export class CanvasrxComponent implements AfterViewInit, OnInit {

  @ViewChild('canvas') public canvas: ElementRef;
  @Input() public width = Math.ceil(parent.innerWidth / 1.153) ;
  @Input() public height = Math.ceil(parent.innerHeight / 1.15);
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  private ourArray: Array<Balls> = [];
  private cx: CanvasRenderingContext2D;
  public ngAfterViewInit() {
    let canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = Math.ceil(parent.innerWidth / 1.153) ;
    canvasEl.height = Math.ceil(parent.innerHeight / 1.1);
    this.width = canvasEl.width;
    this.height =  canvasEl.height;
    console.log(canvasEl.width + 'canvas width');
    this.buildOutBalls();
    this.cx.lineCap = 'round';
    this.load().then(r => NONE_TYPE );
  }
private timer(ms) {
 return new Promise(res => setTimeout(res, ms));
}

async load () { // We need to wrap the loop into an async function for this to work
  for (let i = 0; i < 100000; i++) {
    this.stepDraw();
    await this.timer(3); // then the created Promise can be awaited
  }
}
  private getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  private stepDraw() {
    this.ourArray.forEach( value => {
      this.mutateBalls(value);
    });
  }

  private randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private withInX() {
    let min = Math.ceil(0);
    let max = Math.floor(this.width);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  private withinY(){
    let min = Math.ceil(0);
    let max = Math.floor(this.height);
    return Math.floor(Math.random() * (max - min)) + min;

  }
  private ballSize() {
    let min = Math.ceil(0);
    let max = Math.floor(this.height) / 6;
    return Math.floor(Math.random() * (max - min)) + min;
  }
  private makeBall(){
    let ball = new Balls(this.withInX(), this.withinY(), this.ballSize(), this.getRandomColor());
    this.ourArray.push(
      ball
    );
  }
  public buildOutBalls() {
    for (let i = 0; i < 100; i++){
      this.makeBall();
    }
    this.ourArray.forEach(value => {
      this.drawBalls(value);
    });
  }
  private removeBall(ball){
    this.ourArray.forEach( (item, index) => {
      if (item === ball) {this.ourArray.splice(index, 1 )};
    });
  }

  private mutateBalls(ball:Balls) {
    if (!this.cx) { return; }
    let max = 3;
    let min =-3;
    ball.x = ball.x + Math.floor(Math.random() * (max - min)) + min;
    ball.y = ball.y + Math.floor(Math.random() * (max - min)) + min;
    ball.size = ball.size + Math.floor(Math.random() * (max - min)) + min;
    if (ball.size <=  0) {
      this.removeBall(ball);
      if (this.randomInt(0, 4) > 3) {
        this.makeBall();
      }
      if (this.ourArray.length <= 5){
        for (let i = 0; i < this.randomInt(0, 5); i++){
          this.makeBall();
        }
      }
      return;
    }
    ball.color= this.getRandomColor();
    this.cx.beginPath();
    this.cx.strokeStyle = ball.color
    this.cx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
    this.cx.lineWidth = 5;
    this.cx.fillStyle = ball.color;
    //this.cx.fill();
    this.cx.stroke();


  }
  private drawBalls(ball: Balls) {
    if (!this.cx) { return; }
    this.cx.beginPath();
    this.cx.strokeStyle = ball.color
    this.cx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
    this.cx.lineWidth = 5;
    this.cx.fillStyle = ball.color;
    this.cx.fill();
    this.cx.stroke();
  }

  ngOnInit(): void {

    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      console.log('event: ', evt);
      this.ngAfterViewInit();
    });
  }
}



class Balls {
  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
  private _x: number;
  private _y: number;
  private _size: number;
  private _color: string;
  constructor(x , y, size, color) {
    this._x = x;
    this._y =y;
    this._size = size,
      this._color = color
  }
}
interface Balls {
  x: number;
  y: number;
  size: number;
  color: string;
}
