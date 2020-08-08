import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import InstanceofValidatable from "../validatable/instance";
import Return from "@dikac/t-validator/validatable/simple";

export type Interface<
    InstanceT extends {new(...a:unknown[]): any},
    MessageT = unknown
> = Validator<any, InstanceT, InstanceofValidatable<InstanceT, MessageT>> &
    Message<Function<[Omit<Return<any, any, InstanceT>, 'message'>], MessageT>>


export default class Instanceof<
    InstanceT extends {new(...a:unknown[]): any} = {new(...a:unknown[]): any},
    MessageT = unknown
>
    implements Interface<InstanceT, MessageT>
{
    constructor(
        public instance : InstanceT,
        public message : Function<[Omit<Return<any, any, InstanceT>, 'message'>], MessageT>,
    ) {
    }

    validate<Argument extends any>(value: Argument): Return<any, Argument, InstanceT, InstanceofValidatable<InstanceT, MessageT>> {

        return <Return<any, Argument, InstanceT, InstanceofValidatable<InstanceT, MessageT>>> new InstanceofValidatable(value, this.instance, this.message);
    }
}
