import fs from 'fs';
import zlib from 'zlib';
import {pipeline} from 'stream/promises';

const compress = async () => {

    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./files/archive.gz');
    const gzip = zlib.createGzip();

    try {
        await pipeline(
            readStream,
            gzip,
            writeStream
        );
        console.log('success!');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

await compress();