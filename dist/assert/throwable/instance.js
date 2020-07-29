(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const instance_1 = require("../../boolean/string/instance");
    function Instance(value, instance, message = instance_1.default, error = (v) => new Error(v)) {
        return error(message(false, value, instance));
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map