'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

const _user = require('./controllers/user');

const _user2 = _interopRequireDefault(_user);

const _property = require('./controllers/property');

const _property2 = _interopRequireDefault(_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_express2.default.json());
const port = process.env.PORT || 3000;

app.post('/api/v1/user', _user2.default.create);
app.get('/api/v1/user', _user2.default.getAll);
app.get('/api/v1/user/:id', _user2.default.getOne);
app.put('/api/v1/user/:id', _user2.default.update);
app.delete('/api/v1/user/:id', _user2.default.delete);

app.post('/api/v1/property', _property2.default.create);
app.get('/api/v1/property', _property2.default.getAll);
app.get('/api/v1/property/:id', _property2.default.getOne);
app.put('/api/v1/property/:id', _property2.default.update);
app.delete('/api/v1/property/:id', _property2.default.delete);

app.use('/', _express2.default.static('UI'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Started On Port ${port}`);
});

exports.default = app;
