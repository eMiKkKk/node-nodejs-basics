import fs from 'fs';


const remove = async () => {

      fs.rm('src/fs/files/fileToRemove.txt', (error) => {

        if (error) {
          throw new Error ('FS operation failed');
        } else {
          console.log('File successfully deleted!');}
        });
};

await remove();