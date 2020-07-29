(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "@dikac/t-function/assert/callback", "./throwable/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const type_2 = require("./throwable/type");
    function Type(value, type, error = type_2.default) {
        callback_1.default([value, type], type_1.default, error);
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map