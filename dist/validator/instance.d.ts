import Validator from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import InstanceofValidatable from "../validatable/instance";
import Return from "@dikac/t-validator/return/return";
export default class Instanceof<InstanceT extends {
    new (...a: unknown[]): any;
} = {
    new (...a: unknown[]): any;
}, MessageT = unknown> implements Validator<any, InstanceT, InstanceofValidatable<InstanceT, MessageT>>, Message<Function<[Omit<Return<any, any, InstanceT>, 'message'>], MessageT>> {
    instance: InstanceT;
    message: Function<[Omit<Return<any, any, InstanceT>, 'message'>], MessageT>;
    constructor(instance: InstanceT, message: Function<[Omit<Return<any, any, InstanceT>, 'message'>], MessageT>);
    validate<Argument extends any>(value: Argument): Return<any, Argument, InstanceT, InstanceofValidatable<InstanceT, MessageT>>;
}
