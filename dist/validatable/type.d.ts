import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import TypeInterface from "../type/type";
import Native from "../string/native";
export default class Type<L extends Native, Msg> extends MergeWrapper<Value<unknown>, Message<Msg>, Validatable> {
    readonly type: L;
    constructor(value: unknown, type: L, message: Function<[Readonly<Value<unknown> & TypeInterface<L> & Validatable>], Msg>);
}
