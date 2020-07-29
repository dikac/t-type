(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../value/boolean/instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const instance_1 = require("../value/boolean/instance");
    class Instance extends readonly_merge_1.default {
        constructor(value, instance, message) {
            let container = {
                instance: instance,
                value: value,
            };
            let msg = callback_1.default(container, instance_1.default, () => message(this));
            super(container, msg, msg);
            this.instance = instance;
        }
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map