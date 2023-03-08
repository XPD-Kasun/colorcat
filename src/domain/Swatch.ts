import Color from "./Color";

export default class Swatch {
       id: number;
       name: string;
       colors: Color[];

       constructor(name) {
              this.name = name;
              this.colors = [];
       }

       add(value, name) {
              this.colors.push(new Color(value, name));
       }
       
       remove(name) {
              
              for(let i = 0; i < this.colors.length; i++) {
                     if(this.colors[i].name == name) {
                            this.colors.splice(i, 1);
                            return true;
                     }
              }
              return false;
       }

}