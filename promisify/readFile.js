const fs = require('fs');
const { promisify } = require('util');

fs.readFileAsync = promisify(fs.readFile.bind(fs));

// fs.readFileAsync('package.json')
//   .then(buf => buf.toString())
//   .then(JSON.parse)
//   .then(content => console.log(content))
//   .catch(err => console.error(err));

const readJSON = async file => fs.readFileAsync(file)
  .then(buf => buf.toString())
  .then(JSON.parse);

(async () => {
  const pkgContent = await readJSON('package.json');
  console.log(pkgContent);
})();