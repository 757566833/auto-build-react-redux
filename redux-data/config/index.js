const app = require('./app');
const login = require('./login');
const vcode = require('./vcode');
module.exports = { ...app, ...login, ...vcode,};