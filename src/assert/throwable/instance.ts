import InstanceString from "../string/instance";

export default function Instance<Instance extends {new(...a:unknown[]): any}>(
    value : unknown,
    instance : Instance,
    message : (valid:boolean, value:unknown, instance:Instance)=>string = (valid, value, instance)=>InstanceString(valid, instance),
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(false, value, instance));
}
