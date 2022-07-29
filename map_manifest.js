import fs from "fs";
import glob from "glob";

const writeManifestFile = async(manifestObject) => {
    return await fs.writeFile(
        "./src/map-manifest.json",
        JSON.stringify(manifestObject),
        {
            encoding: "utf-8",
            flag: "w"
        },
        (err) => {
            if (!!err) throw new Error(err);
        }
    );
}

// converted to promise for ease of use
const globPromise = async(dest) => {
    return await new Promise((resolve, reject) => {
        glob(dest, (er, files) => {
            if (!!er) reject(er);
            resolve(files);
        });
    });
}

const readMapFiles = async() => {
    const maps = {};
    const mapFolders = await globPromise("./public/maps/*");
    const mapNames = mapFolders.map(mapName => mapName.substring(mapName.lastIndexOf("/")+1))

    for (let i = 0; i < mapNames.length; i++) {
        const map = mapNames[i];
        const mapImageFolderLocation = await globPromise(`./public/maps/${map}/*`);
        const mapImageNames = mapImageFolderLocation.map((l) => l.substring(
            l.lastIndexOf("/")+1
        ));
        maps[map] = mapImageNames;
    }

    return maps;
}

const start = async() => {
    const map_manifest = await readMapFiles();
    await writeManifestFile(map_manifest);
    console.log("Built manifest of map files", map_manifest);
}

start();