import { Component, OnInit } from '@angular/core';

import * as data from '../sample.json';
import {Blogs} from "../global_namespace";



@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'Home Component overriding title';
  date = Date.now();
  blogs: Array<Blogs> = (data as any).default;
  loremLong = '' +
    '' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a magna dapibus, consequat nisl quis, convallis arcu. In hac habitasse platea dictumst. In quis ex mattis, elementum urna sed, elementum erat. Duis sed urna mauris. In non blandit ex. Vestibulum finibus odio lectus, faucibus rhoncus nisl scelerisque rutrum. Aliquam luctus arcu at nunc tincidunt, sed facilisis ligula interdum. Morbi quis ante sed tellus maximus congue. Nunc ac nibh pretium, consectetur ex at, egestas erat. Mauris consectetur risus id vestibulum laoreet. Integer sit amet orci ut tellus pellentesque volutpat at a enim. Donec venenatis dignissim felis, at imperdiet eros mollis sed. Maecenas maximus leo at lectus placerat dictum.\n' +
    '\n' +
    'Duis suscipit ante dui, eu lobortis metus aliquam ut. Maecenas feugiat nulla quis risus laoreet sollicitudin. Morbi ornare elit in lacus convallis, vitae lacinia justo ullamcorper. Donec tempus blandit eleifend. Nulla consequat arcu eget diam placerat dignissim. Nulla vel convallis eros, id fringilla magna. Sed sed rutrum velit, ac pharetra nisi. Nulla eget ex a nibh facilisis finibus sit amet et ipsum. In hac habitasse platea dictumst. Phasellus condimentum, felis a ullamcorper scelerisque, nisl libero aliquet tellus, a posuere urna tortor vitae erat. Nullam bibendum metus a elit molestie, vitae scelerisque elit fringilla. Ut luctus metus ac tellus bibendum egestas. Donec finibus libero sem. Donec arcu lorem, eleifend at libero vitae, tempor consectetur ex. Vivamus porta lorem venenatis urna gravida ullamcorper.\n' +
    '\n' +
    'Aenean luctus tortor ut viverra venenatis. Aliquam et imperdiet augue. Cras non est magna. Suspendisse potenti. Praesent id tortor ullamcorper, sagittis eros at, gravida magna. Phasellus eget condimentum est, sit amet placerat lorem. Vivamus rutrum nisl venenatis orci mollis, ut dapibus lectus fringilla. Mauris nec imperdiet purus, a gravida velit. Donec nec dignissim nibh. Suspendisse potenti.\n' +
    '\n' +
    'Integer ullamcorper massa nulla, ac rhoncus tellus molestie id. Suspendisse semper sem eget risus suscipit, eget interdum felis condimentum. Cras vitae est eu nibh porttitor feugiat. Curabitur orci magna, euismod non fringilla ac, vehicula finibus urna. Vivamus et consequat nisl. Morbi in leo at metus suscipit mattis quis vitae est. Proin feugiat maximus suscipit. Suspendisse sit amet elit vitae neque ornare posuere sed id odio. Duis condimentum vulputate nulla ut iaculis. Aenean luctus, tellus in volutpat cursus, odio sem egestas turpis, et accumsan mauris risus vitae mi. In lobortis nisi dapibus vehicula congue. Integer cursus imperdiet elit, quis dapibus nibh pellentesque et. Etiam vitae tincidunt nibh, eu tincidunt mauris.';

  ngOnInit(): void {
  }
}
