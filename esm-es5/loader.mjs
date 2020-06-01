import { a as patchEsm, b as bootstrapLazy } from './index-be579b61.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["tiqqe-button", [[1, "tiqqe-button", { "label": [1], "color": [1] }]]]], options);
    });
};
export { defineCustomElements };
