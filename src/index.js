const fs = require('fs');
const path = require('path');
const app = require('./app');
const dayjs = require('dayjs');

let port = 8501;

async function start() {
    try {
        app.listen(port);
        console.log(`APIRest running on http://localhost:${port}`);
        fs.appendFileSync(path.join(__dirname, '../logs/info.log'), `${dayjs().format('DD/MM/YYYY hh:mm:ss a')} - ${__filename} - APIRest running on http://localhost:${port}\n`);
    }
    catch (err) {
        fs.appendFileSync(path.join(__dirname, '../logs/error.log'), `${dayjs().format('DD/MM/YYYY hh:mm:ss a')} - ${__filename} - ${err}\n`);
        console.log(err);
    }
}

start();