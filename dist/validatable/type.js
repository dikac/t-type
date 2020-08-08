(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/readonly-merge", "@dikac/t-validator/validatable/callback", "../value/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validator/validatable/readonly-merge");
    const callback_1 = require("@dikac/t-validator/validatable/callback");
    const type_1 = require("../value/boolean/type");
    class Type extends readonly_merge_1.default {
        constructor(value, type, message) {
            let container = {
                type: type,
                value: value,
            };
            let msg = callback_1.default(container, type_1.default, () => message(this));
            super(container, msg, msg);
            this.type = type;
        }
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map