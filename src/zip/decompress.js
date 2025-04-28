import fs from 'fs';
import zlib from 'zlib';
import {pipeline} from 'stream/promises';

const decompress = async () => {

    const readStream = fs.createReadStream('./files/archive.gz');
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt');
    const gunzip = zlib.createGunzip();

    try {
        await pipeline(
            readStream,
            gunzip,
            writeStream
        );
        console.log('success!');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

await decompress();