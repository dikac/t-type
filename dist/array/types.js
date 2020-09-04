(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Types = [
        "object",
        "string",
        "undefined",
        "boolean",
        "number",
        "bigint",
        "symbol",
        "function"
    ];
    Object.freeze(Types);
    exports.default = Types;
});
//# sourceMappingURL=types.js.map