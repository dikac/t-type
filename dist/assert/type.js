import Guard from "../boolean/type";
import Callback from "@dikac/t-function/assert/callback";
import TypeError from "./throwable/type";
export default function Type(value, type, error = TypeError) {
    Callback([value, type], Guard, error);
}
//# sourceMappingURL=type.js.map