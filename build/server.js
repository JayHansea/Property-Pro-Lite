/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */


// eslint-disable-next-line no-underscore-dangle
// eslint-disable-next-line no-use-before-define
const _express = _interopRequireDefault(require('express'));

// eslint-disable-next-line no-underscore-dangle
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line vars-on-top
const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (_req, res) => res.status(200).send({
  message: 'YAY! Congratulations! Your first endpoint is working',
}));
app.listen(3000);
console.log('app running on port ', 3000);
