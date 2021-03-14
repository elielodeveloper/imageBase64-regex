'use strict';

module.exports = options => {
  options = Object.assign({}, options);
  const regex = '(data:image\/[^;]+;base64[^"]+)';
  return new RegExp(regex, 'g');
}