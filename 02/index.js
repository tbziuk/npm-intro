const users = require('users_file');
const path = require('path');
const fs = require('fs');

let pathJSON = path.join(__dirname + '/users.json');

console.log(users.saveData(pathJSON, 'data', true));