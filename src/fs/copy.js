import fs from 'fs';

const copy = async () => {
  fs.cpSync('src/fs/files', 'src/fs/files_copy', { recursive: true}, (err) => {
    if (err) throw new Error ('FS operation failed');
    console.log('Folder copy finished!');
  });
};

await copy();
