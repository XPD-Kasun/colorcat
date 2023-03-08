import {open, writeFile} from 'fs/promises';
import path from 'path';
import Collection from "../../domain/Collection";
import writeSwatch from './writeSwatch';


export async function writeSingleCollection(dirName: string, collection: Collection) {
       
       let fileHandle = await open(path.join(dirName, collection.name + '.json'), 'a');
       await writeFile(fileHandle, '{\nname:' + collection.name + ',\nswatches:[');

       for(let i = 0; i < collection.swatchSet.length; i++) {
              
              let sw = collection.swatchSet[i];
              await writeSwatch(fileHandle, sw);
               
              if(i != collection.swatchSet.length-1) {
                     await writeFile(fileHandle, ',');
              }
              
       }
       await writeFile(fileHandle, ']\n}');
}