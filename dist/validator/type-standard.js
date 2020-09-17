import Type from "./type";
import StringType from "../validatable/string/type";
export default function TypeStandard(type) {
    return new Type(type, StringType);
}
//# sourceMappingURL=type-standard.js.map