const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
      error: 'Page not found.'
    })
});

app.get('/users', (req, res) => {
    res.send([{
      name: 'Mike',
      age: 27
    }, {
      name: 'Hamed',
      age: 21
    }, {
      name: 'Jen',
      age: 26
    }]);
  });
  // GET /users
  // Give users a name prop and age prop

app.listen(3000);
module.exports.app = app;