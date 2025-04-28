import fs from 'fs';


const read = async () => {

    const readStream = fs.createReadStream('./files/fileToRead.txt')

    readStream.on('data', (x) => {
        process.stdout.write(x);
    })
};

await read();