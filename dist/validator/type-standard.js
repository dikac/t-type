(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./type", "../validatable/string/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("./type");
    const type_2 = require("../validatable/string/type");
    function TypeStandard(type) {
        return new type_1.default(type, type_2.default);
    }
    exports.default = TypeStandard;
});
//# sourceMappingURL=type-standard.js.map