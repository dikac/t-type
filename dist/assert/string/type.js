(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_is_1 = require("@dikac/t-string/message/sentences-is");
    function Type(valid, value, type, subject = '', conversion = value => typeof value) {
        const sentence = sentences_is_1.default(valid, [subject], {
            valid: ['is type of'],
            invalid: ['is not type of'],
        }, [type]);
        if (!valid && conversion) {
            sentence.subject.push(conversion(value));
        }
        return sentence.message;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map