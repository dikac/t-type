import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string/native";
import Native from "../native/native";
import Return from "@dikac/t-validator/validatable/simple";

export type Interface<TypeName extends StringNative, MessageT = unknown> =
    Validator<any, Native<TypeName>, TypeofValidatable<TypeName, MessageT>> &
    Message<Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>>;

export default class Typeof<
    TypeName extends StringNative = StringNative,
    MessageT = unknown
>
    implements Interface<TypeName, MessageT>
{
    constructor(
        public type : TypeName,
        public message : Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>,
    ) {
    }

    validate<Argument extends any>(value: Argument): Return<any, Argument, Native<TypeName>, TypeofValidatable<TypeName, MessageT>> {

        return <Return<any, Argument, Native<TypeName>, TypeofValidatable<TypeName, MessageT>>> new TypeofValidatable(value, this.type, this.message);
    }
}
