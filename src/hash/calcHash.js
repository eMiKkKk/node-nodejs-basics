import { createHash } from 'crypto';
import fs from 'fs';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const fileStream = fs.createReadStream('./files/fileToCalculateHashFor.txt');

    try {
        await pipeline(
            fileStream,
            hash
        );

        const hexHash = hash.digest('hex');
        console.log(hexHash);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

await calculateHash();