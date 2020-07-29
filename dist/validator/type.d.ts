import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import StringNative from "../string/native";
import TypeInterface from "../type/type";
import Native from "../native/native";
export declare type Return<L extends StringNative, Msg> = (Validatable<true> & Message<Msg> & Value<Native<L>> & TypeInterface<L>) | (Validatable<false> & Message<Msg> & Value<unknown> & TypeInterface<L>);
export default class Typeof<L extends StringNative = StringNative, Msg = unknown> implements Validator<unknown, Readonly<Return<L, Msg>>>, Message<Function<[Return<L, Msg>], Msg>> {
    type: L;
    message: Function<[Return<L, Msg>], Msg>;
    constructor(type: L, message: Function<[Return<L, Msg>], Msg>);
    validate(value: unknown): Readonly<Return<L, Msg>>;
}
