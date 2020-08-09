import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string/native";
import Native from "../native/native";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
export declare type Interface<TypeName extends StringNative, MessageT = unknown> = Validator<unknown, Native<TypeName>, TypeofValidatable<unknown, TypeName, MessageT>> & Message<Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>>;
export default class Typeof<TypeName extends StringNative = StringNative, MessageT = unknown> implements Interface<TypeName, MessageT> {
    type: TypeName;
    message: Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>;
    constructor(type: TypeName, message: Function<[Omit<Return<any, any, Native<TypeName>>, 'message'>], MessageT>);
    validate<Argument extends Native<TypeName>>(value: Argument): Replace<TypeofValidatable<Argument, TypeName, MessageT>, true>;
    validate<Argument extends any>(value: Argument): Return<any, Argument, Native<TypeName>, TypeofValidatable<Argument, TypeName, MessageT>>;
}
