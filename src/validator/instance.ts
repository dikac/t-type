import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import InstanceofValidatable from "../validatable/instance";
import InstanceInterface from "../instance/instance";
import {Class} from "ts-toolbelt";
import Native from "../native/native";
import Construct from "@dikac/t-validator/return/construct";
import TypeofValidatable from "../validatable/type";

export default class Instanceof<InstanceT extends {new(...a:unknown[]): any} = {new(...a:unknown[]): any}, MessageT = unknown>
    implements
        Validator<any, InstanceT, InstanceofValidatable<InstanceT, MessageT>>,
        Message<Function<[Omit<Construct<any, any, InstanceT>, 'message'>], MessageT>>
{
    constructor(
        public instance : InstanceT,
        public message : Function<[Omit<Construct<any, any, InstanceT>, 'message'>], MessageT>,
    ) {
    }

    validate<Argument extends any>(value: Argument): Construct<any, Argument, InstanceT, InstanceofValidatable<InstanceT, MessageT>> {

        return <Construct<any, Argument, InstanceT, InstanceofValidatable<InstanceT, MessageT>>> new InstanceofValidatable(value, this.instance, this.message);
    }
}
