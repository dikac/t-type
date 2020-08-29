import Native from "../../string/native";
import TypeString from "../../boolean/string/type";

export default function Type(
    value : unknown,
    type : Native,
    message : (valid:boolean, value:unknown, type:Native)=>string = TypeString,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(false, value, type));
}
