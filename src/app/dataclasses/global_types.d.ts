

declare module 'Global' {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */
  interface Blogs {
    title: string;
    date: string;
    content: Array<string>;
    images: Array<Images>;
    lolExecute: Array<string>;

  }

  interface Images {
    url: string;
    alt: string;
    width: number;
    height: number;
  }

  interface Citations {
    url: string;
    name: string;
    date?: string;
  }
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
