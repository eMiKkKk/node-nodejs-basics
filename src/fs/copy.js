import fs from 'fs';

const copy = async () => {

  if (fs.existsSync('./src/fs/files_copy')) {
    throw new Error ('FS operation failed');
  }

  if (fs.existsSync('./src/fs/files')) {
    fs.cpSync('./src/fs/files', './src/fs/files_copy', { recursive: true}, (err) => {
    });
    console.log('Folder copy finished!');

  }
  else {
    throw new Error ('FS operation failed');

  }


};

await copy();
