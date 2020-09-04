import String from "../../string";
import TypeString from "../string/type";

export default function Type(
    value : unknown,
    type : String,
    message : (valid:boolean, value:unknown, type:String)=>string = TypeString,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(false, value, type));
}
