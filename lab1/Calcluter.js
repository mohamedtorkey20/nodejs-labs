const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        const data = req.url.split('/');
        const numbers = [];
        const op = data[1];
        for (let i = 2; i < data.length; i++) {
            numbers.push(parseInt(data[i]));
        }

        let result = 0; 

        switch (op) {
            case 'add':
                result = numbers.reduce((acc, curr) => acc + curr);
                fs.writeFile('data.txt', `the sum: ${result}`, (err) => {
                    if (err)
                    {
                        console.log('Error');
                    }else{
                    console.log('File written successfully');
                    }
                });
                break;
            case 'sub':
                result = numbers.reduce((acc, curr) => acc - curr);
                fs.writeFile('data.txt', `the sub: ${result}`, (err) => {
                    if (err)
                    {
                        console.log('Error');
                    }else{
                    console.log('File written successfully');
                    }
                });
                break;
            case 'multi':
                result = numbers.reduce((acc, curr) => acc * curr);
                fs.writeFile('data.txt', `the multi: ${result}`, (err) => {
                    if (err)
                    {
                        console.log('Error');
                    }else{
                    console.log('File written successfully');
                    }
                });
                break;
            case 'div':
                    result = numbers.reduce((acc, curr) => acc / curr);
                    fs.writeFile('data.txt', `the div: ${result}`, (err) => {
                        if (err)
                        {
                            console.log('Error');
                        }else{
                        console.log('File written successfully');
                        }
                    });
                
                break;
        }
    }
    res.end();
}).listen(9000);

