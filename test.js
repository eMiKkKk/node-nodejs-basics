const read = async () => {
  const fs = require('fs');
  fs.readFile('./files/fileToRead.txt', (error, data) => {
    console.log(data);
  });
};

await read();