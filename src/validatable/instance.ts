import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import InstanceBoolean from "../value/boolean/instance";
import InstanceInterface from "../instance/instance";

export default class Instance<InstanceT extends {new(...a:unknown[]): any}, Msg>
    extends MergeWrapper<Value<unknown>, Message<Msg>, Validatable>
{
    readonly instance : InstanceT;

    constructor(
        value : unknown,
        instance : InstanceT,
        message : Function<[Readonly<Value<unknown> & InstanceInterface<InstanceT> & Validatable>], Msg>,
    ) {

        let container : Value<unknown> & InstanceInterface<InstanceT> = {
            instance : instance,
            value : value,
        };

        let msg = MessageCallback(container, InstanceBoolean, ()=>message(this));

        super(container, msg, msg);

        this.instance = instance;
    }
}
