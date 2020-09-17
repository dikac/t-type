import TypeString from "../string/type";
export default function Type(value, type, message = TypeString, error = (v) => new Error(v)) {
    return error(message(false, value, type));
}
//# sourceMappingURL=type.js.map