'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-14e9b8ca.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.patchEsm().then(() => {
  return index.bootstrapLazy([["tiqqe-button.cjs",[[1,"tiqqe-button",{"label":[1],"color":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
