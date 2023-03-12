import {writeFile} from 'fs/promises';
import path from 'path';
import Collection from "../../domain/Collection";

export async function writeSingleCollection(dirName: string, collection: Collection) {       
       await writeFile(path.join(dirName, collection.name + '.json'), JSON.stringify(collection));
}