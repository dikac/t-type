(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../../boolean/string/type");
    function Type(value, type, message = type_1.default, error = (v) => new Error(v)) {
        return error(message(false, value, type));
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map