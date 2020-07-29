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
    function Instance(valid, value, type) {
        if (valid) {
            return `value is instanceof of ${type}`;
        }
        else {
            return `value is not instanceof of ${type}`;
        }
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map