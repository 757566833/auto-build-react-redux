const fs = require('fs');
const path = require('path');
const entrys = fs.readdirSync(path.resolve(__dirname, '..', '..', 'src', 'entry'));
let entrysjson = {};
for (let index = 0; index < entrys.length; index++) {
    const element = entrys[index];
    if (element.includes('.jsx')) {
        let arr = ['whatwg-fetch'];
        arr.push(`./src/entry/${element}`);
        const name = element.substring(0, element.length - 4);
        entrysjson[name] = arr;
    }
}
module.exports = {
    entrysjson
};