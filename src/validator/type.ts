import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string/native";
import TypeInterface from "../type/type";
import Native from "../native/native";

export type Return<L extends StringNative, Msg> =
    Validatable<true> & Message<Msg> & Value<Native<L>> & TypeInterface<L> |
    Validatable<false> & Message<Msg> & Value<unknown> & TypeInterface<L>;

export default class Typeof<L extends StringNative = StringNative, Msg = unknown>
    implements
        Validator<unknown, Readonly<Return<L , Msg>>>,
        Message<Function<[Return<L, Msg>], Msg>>
{
    constructor(
        public type : L,
        public message : Function<[Return<L, Msg>], Msg>,
    ) {
    }

    validate(value: unknown): Readonly<Return<L , Msg>> {

        return <Readonly<Return<L , Msg>>> new TypeofValidatable(value, this.type, this.message);
    }
}
