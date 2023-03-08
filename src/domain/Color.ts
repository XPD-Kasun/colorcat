import { ColorTranslator } from "colortranslator";

class Color {
       public value: string;
       public name: string;

       constructor(value, name = "") {
              this.value = value;
              this.name = name || this.value;
       }

       hex() {
              let colorTranslator = new ColorTranslator(this.value);
              if(colorTranslator.A != 255) {
                     return colorTranslator.HEX;
              }
              return colorTranslator.HEXA;
       }

       rgb() {              
              let colorTranslator = new ColorTranslator(this.value);
              if(colorTranslator.A != 255) {
                     return colorTranslator.RGBA;
              }
              return colorTranslator.RGB;
       }

       cmyk() {
              
              let colorTranslator = new ColorTranslator(this.value);
              if(colorTranslator.A != 255) {
                     return colorTranslator.CMYKA;
              }
              return colorTranslator.CMYK;
       }

       hsl() {              
              let colorTranslator = new ColorTranslator(this.value);
              if(colorTranslator.A != 255) {
                     return colorTranslator.HSLA;
              }
              return colorTranslator.HSL;
       }
}

export default Color;