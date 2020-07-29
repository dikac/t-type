import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import InstanceInterface from "../instance/instance";
import { Class } from "ts-toolbelt";
export declare type Return<InstanceT extends {
    new (...a: unknown[]): any;
}, MessageT> = (Validatable<true> & Message<MessageT> & Value<Class.InstanceOf<InstanceT>> & InstanceInterface<InstanceT>) | (Validatable<false> & Message<MessageT> & Value<unknown> & InstanceInterface<InstanceT>);
export default class Instanceof<InstanceT extends {
    new (...a: unknown[]): any;
} = {
    new (...a: unknown[]): any;
}, MessageT = unknown> implements Validator<unknown, Readonly<Return<InstanceT, MessageT>>>, Message<Function<[Return<InstanceT, MessageT>], MessageT>> {
    instance: InstanceT;
    message: Function<[Return<InstanceT, MessageT>], MessageT>;
    constructor(instance: InstanceT, message: Function<[Return<InstanceT, MessageT>], MessageT>);
    validate(value: unknown): Readonly<Return<InstanceT, MessageT>>;
}
