'use strict';

module.exports = () => {
  const regex = '(data:image\/[^;]+;base64[^"]+)';
  return new RegExp(regex, 'g');
}