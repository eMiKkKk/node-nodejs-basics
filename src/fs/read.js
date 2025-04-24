import fs from 'fs';


const read = async () => {
  fs.readFile('./src/fs/files/fileToRead.txt', 'utf-8', (error, data) => {

    if (error) {
      throw new Error ('FS operation failed');
    } else {
      console.log(data);}
  });
};

await read();