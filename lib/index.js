'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useCounter(init) {
    var _a = react.useState(init || 0), count = _a[0], setCount = _a[1];
    var inc = react.useCallback(function () { return setCount(function (c) { return c + 1; }); }, []);
    var dec = react.useCallback(function () { return setCount(function (c) { return c - 1; }); }, []);
    return {
        count: count,
        inc: inc,
        dec: dec,
    };
}

var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react.useState(initialState), state = _a[0], set = _a[1];
    var setState = react.useCallback(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, [set]);
    return [state, setState];
};

exports.useCounter = useCounter;
exports.useSetState = useSetState;
