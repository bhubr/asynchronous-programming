const db = require('./db');

db.queryAsync('select * from movie')
  .then(movies => {
    console.log('it worked', movies.length);
  })
  .catch(err => {
    console.error('an error occurred', err);
  });

