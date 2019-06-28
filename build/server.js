/* eslint-disable no-void */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _express = _interopRequireDefault(require('express'));

const _routes = _interopRequireDefault(require('./routes'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
const app = (0, _express.default)();
const port = process.env.PORT || 3000;
app.use(_express.default.json());
app.use('/', _express.default.static('UI'));
(0, _routes.default)(app); // server

app.listen(port, () => {
  console.log('Server Started On Port '.concat(port));
});
const _default = app;
exports.default = _default;
