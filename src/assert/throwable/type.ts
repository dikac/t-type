import Native from "../../string/native";
import Function from "@dikac/t-function/function";
import TypeString from "../../boolean/string/type";

export default function Type(
    value : unknown,
    type : Native,
    message : Function<[boolean, unknown, Native], string> = TypeString,
    error : Function<[string], Error> = (v)=>new Error(v),
) : Error {

    return error(message(false, value, type));
}
