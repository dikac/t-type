import Function from "@dikac/t-function/function";
import InstanceString from "../../boolean/string/instance";

export default function Instance<Instance extends {new(...a:unknown[]): any}>(
    value : unknown,
    instance : Instance,
    message : Function<[boolean, unknown, Instance], string> = InstanceString,
    error : Function<[string], Error> = (v)=>new Error(v),
) : Error {

    return error(message(false, value, instance));
}
