const parseArgs = () => {

    let index = '';
    for(let i = 2; i < process.argv.length; i++) {
        i % 2 == 0 ? index += `${process.argv[i].replace('--', '')} is `: index += `${process.argv[i].replace('--', '')}, `;
    }
    console.log(index);
};

parseArgs();