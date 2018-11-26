const fs = require('fs');
const { promisify } = require('util');

fs.readFileAsync = promisify(fs.readFile.bind(fs));

fs.readFileAsync('package.json')
  .then(buf => buf.toString())
  .then(JSON.parse)
  .then(content => console.log(content))
  .catch(err => console.error(err))