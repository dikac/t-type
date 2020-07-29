import Guard from "../boolean/type";
import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import TypeError from "./throwable/type";
import Native from "../string/native";

export default function Type(
    value : unknown,
    type : Native,
    error : Fn<[unknown, Native], Error> = TypeError
) : asserts value is Native {

    Callback([value, type], Guard, error);
}
