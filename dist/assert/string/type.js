(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_must_1 = require("@dikac/t-string/message/sentences-must");
    function Type(valid, value, type, subject = '', conversion = value => typeof value) {
        const sentence = sentences_must_1.default(valid, [subject]);
        sentence.expect = ['type of', type];
        sentence.comma = ['expect'];
        if (!valid && conversion) {
            sentence.actual.push('actual', conversion(value));
        }
        return sentence.message;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map