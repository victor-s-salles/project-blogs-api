const express = require('express');
const { Login } = require('./controllers');
const { userRouter, categoryRouter, postCategory } = require('./router');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', Login);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);

app.use('/post', postCategory);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
