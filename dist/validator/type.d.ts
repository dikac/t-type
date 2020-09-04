import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import Type from "../type";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
export declare type Interface<TypeName extends StringNative, MessageT = unknown> = Validator<unknown, Type<TypeName>, TypeofValidatable<unknown, TypeName, MessageT>> & Message<(result: Omit<Return<any, any, Type<TypeName>>, 'message'>) => MessageT>;
export default class Typeof<TypeName extends StringNative = StringNative, MessageT = unknown> implements Interface<TypeName, MessageT> {
    type: TypeName;
    message: (result: Omit<Return<any, any, Type<TypeName>>, 'message'>) => MessageT;
    constructor(type: TypeName, message: (result: Omit<Return<any, any, Type<TypeName>>, 'message'>) => MessageT);
    validate<Argument extends Type<TypeName>>(value: Argument): Replace<TypeofValidatable<Argument, TypeName, MessageT>, true>;
    validate<Argument extends any>(value: Argument): Return<any, Argument, Type<TypeName>, TypeofValidatable<Argument, TypeName, MessageT>>;
}
