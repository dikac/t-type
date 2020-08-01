import Validator from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string/native";
import Native from "../native/native";
import Return from "@dikac/t-validator/return/return";
export default class Typeof<TypeName extends StringNative = StringNative, MessageT = unknown> implements Validator<any, Native<TypeName>, TypeofValidatable<TypeName, MessageT>>, Message<Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>> {
    type: TypeName;
    message: Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>;
    constructor(type: TypeName, message: Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>);
    validate<Argument extends any>(value: Argument): Return<any, Argument, Native<TypeName>, TypeofValidatable<TypeName, MessageT>>;
}
