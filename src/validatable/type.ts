import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import TypeBoolean from "../value/boolean/type";
import TypeInterface from "../type/type";
import Native from "../string/native";


export default class Type<TypeT extends Native, MessageT>
    extends MergeWrapper<Value<unknown>, Message<MessageT>, Validatable>
{
    readonly type : TypeT;

    constructor(
        value : unknown,
        type : TypeT,
        message : Function<[Readonly<Value<unknown> & TypeInterface<TypeT> & Validatable>], MessageT>,
    ) {

        let container : Value<unknown> & TypeInterface<TypeT> = {
            type : type,
            value : value,
        };

        let msg = MessageCallback(container, TypeBoolean, ()=>message(this));

        super(container, msg, msg);

        this.type = type;
    }
}
