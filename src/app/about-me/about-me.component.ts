import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']

})

export class AboutMeComponent implements AfterViewInit, OnInit {



  svg = 'assets/images/androidsvg.svg';
  cssLiteral = `float:left; width: 100%;height=600px`;


  onClickCV() {
    const url = 'https://docs.google.com/document/d/e/2PACX-1vQNHjL-3eeDJIHMYBsziPkOjZKSqAsFMqc1uuW7FhlSkwbM8s9L51-gCi4gw698UfwangxuBSJ87vVB/pub';
    window.open(url, '_blank');
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
