import * as data from "./canvas_experiments/canvas2/colors.json";
import validate = WebAssembly.validate;

export interface Blogs {
    title: string;
    date: string;
    content: Array<string>;
    images: Array<Images>;
    lolExecute: Array<string>;

  }

  export interface Images {
    url: string;
    alt: string;
    width: number;
    height: number;
  }

 export interface Citations {
    url: string;
    name: string;
    date?: string;
  }
interface Colors {
  color: string;
  default: Array<string>;
}
// @ts-ignore
const colors: Array<Colors> = (data as Array<Colors>).default;
const colorsLength = colors.length;
export function getColor() {
  //make this a closure so we get a different color each time
  let color =(number)=>{return Math.floor(number)}
  return colors[ color(Math.random() * colorsLength)]
}
export function randomIntRange(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// /*~ If your module exports types or values, write them as usual */
// export interface Blogs {
//   title: string;
//   date: string;
//   content: Array<string>;
//   images: Array<Images>;
//   lolExecute: Array<string>;
// }
//
// interface Images {
//   url: string;
//   width: number;
//   height: number;
// }
