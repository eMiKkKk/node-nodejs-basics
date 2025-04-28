import stream from 'stream';

const transform = async () => {


    const reverseTransform = new stream.Transform({
        transform(chunk, encoding, callback) {
          const reversedText = chunk.toString('utf8').split('').reverse().join('');
          this.push(reversedText);
          callback();
        }
      });

      process.stdin
      .on('data', (chunk) => reverseTransform.write(chunk))
      .on('end', () => reverseTransform.end());

    // 3. Выводим результат
    reverseTransform.on('data', (chunk) => process.stdout.write(chunk));


};

await transform();