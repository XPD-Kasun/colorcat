import Swatch from "./Swatch";


export default class Collection {

       id: string;
       name: string;
       swatchSet: Swatch[];

       constructor(swatches: Swatch[]) {
              this.swatchSet = [];
              if(swatches) {
                     for(let a of swatches) {
                            this.swatchSet.push(a);
                     }
              }
       }

}