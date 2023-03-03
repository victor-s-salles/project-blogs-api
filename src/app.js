const express = require('express');
const { Login, createNewUser } = require('./controllers');
const validateFieldsNewUser = require('./middlewares/validateFieldsNewUser');
const validateExistingUser = require('./middlewares/validateExistingUser');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', Login);

app.post('/user', validateFieldsNewUser, validateExistingUser, createNewUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
