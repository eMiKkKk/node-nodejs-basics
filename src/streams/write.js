import fs from 'fs';


const write = async () => {

    const writeStream = fs.createWriteStream('./files/fileToWrite.txt');
    console.log('type something... press ctrl+c to exit');

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);

    });

    process.stdin.on('end', () => {
        writeStream.end();
    });
};

await write();