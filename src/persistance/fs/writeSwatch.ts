import Swatch from "../../domain/Swatch";
import { FileHandle, writeFile } from 'fs/promises';


export default async function writeSwatch(file: FileHandle, swatch: Swatch) {

       let swatchObj: [{ n: string, c: string }];

       for (let color of swatch.colors) {
              swatchObj.push({
                     n: color.name,
                     c: color.hex()
              });
       }

       await writeFile(file, JSON.stringify(swatchObj));
};