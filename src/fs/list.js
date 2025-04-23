import fs from 'fs';



const list = async () => {
  fs.readdir('src/fs/files/', (error, data) => {
    if (error) {
      throw new Error ('FS operation failed');
    } else {
      console.log(Array.from(data));}
  })

};

await list();