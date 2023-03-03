const express = require('express');
const { Login, createNewUser, listAllUsers, getUserById } = require('./controllers');
const { validateFieldsNewUser, validateExistingUser, validateJWT } = require('./middlewares');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', Login);

app.post('/user', validateFieldsNewUser, validateExistingUser, createNewUser);

app.get('/user', validateJWT, listAllUsers);

app.get('/user/:id', validateJWT, getUserById);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
