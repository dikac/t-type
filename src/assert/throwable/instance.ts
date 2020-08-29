import InstanceString from "../../boolean/string/instance";

export default function Instance<Instance extends {new(...a:unknown[]): any}>(
    value : unknown,
    instance : Instance,
    message : (valid:boolean, value:unknown, instance:Instance)=>string = InstanceString,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(false, value, instance));
}
