import {Component, OnInit, ViewChild} from '@angular/core';
import {CanvasrxComponent} from "./canvasrx.component";

@Component({
  selector: 'app-canvas-ts-xp1',
  templateUrl: './canvas-ts-xp1.component.html',
  styleUrls: ['./canvas-ts-xp1.component.css']
})
export class CanvasTsXp1Component implements OnInit {

  constructor() { }
 @ViewChild(CanvasrxComponent)
  canvasComponent: CanvasrxComponent;
  ngOnInit(): void {
  }
 public onClickReload() {
  this.canvasComponent.ngAfterViewInit();
  console.log( "from downtown");
 }
}
