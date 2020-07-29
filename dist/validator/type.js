(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../validatable/type");
    class Typeof {
        constructor(type, message) {
            this.type = type;
            this.message = message;
        }
        validate(value) {
            return new type_1.default(value, this.type, this.message);
        }
    }
    exports.default = Typeof;
});
//# sourceMappingURL=type.js.map