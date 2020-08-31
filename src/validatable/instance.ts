import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import MessageCallback from "@dikac/t-validator/validatable/callback-function";
import InstanceBoolean from "../value/boolean/instance";
import InstanceInterface from "../instance/instance";

export default class Instance<ValueT, InstanceT extends {new(...a:unknown[]): any}, MessageT>
    extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable>
{
    readonly instance : InstanceT;

    constructor(
        value : ValueT,
        instance : InstanceT,
        message : (result:Readonly<Value<ValueT> & InstanceInterface<InstanceT> & Validatable>)=>MessageT,
    ) {

        let container : Value<ValueT> & InstanceInterface<InstanceT> = {
            instance : instance,
            value : value,
        };

        let msg = MessageCallback(container, InstanceBoolean, ()=>message(this));

        super(container, msg, msg);

        this.instance = instance;
    }
}
