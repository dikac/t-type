import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import TypeInterface from "../type/type";
import Native from "../string/native";
export default class Type<ValueT = unknown, TypeT extends Native = Native, MessageT = unknown> extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable> {
    readonly type: TypeT;
    constructor(value: ValueT, type: TypeT, message: Function<[Readonly<Value<ValueT> & TypeInterface<TypeT> & Validatable>], MessageT>);
}
