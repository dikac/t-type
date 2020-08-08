import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import InstanceInterface from "../instance/instance";
export default class Instance<InstanceT extends {
    new (...a: unknown[]): any;
}, Msg> extends MergeWrapper<Value<unknown>, Message<Msg>, Validatable> {
    readonly instance: InstanceT;
    constructor(value: unknown, instance: InstanceT, message: Function<[Readonly<Value<unknown> & InstanceInterface<InstanceT> & Validatable>], Msg>);
}
