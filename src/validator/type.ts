import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string/native";
import TypeInterface from "../type/type";
import Native from "../native/native";
import Construct from "@dikac/t-validator/return/construct";

export default class Typeof<TypeName extends StringNative = StringNative, MessageT = unknown>
    implements
        Validator<any, Native<TypeName>, TypeofValidatable<TypeName, MessageT>>,
        Message<Function<[Omit<Construct<any, any, Native<TypeName>>, 'message'>], MessageT>>
{
    constructor(
        public type : TypeName,
        public message : Function<[Omit<Construct<any, any, Native<TypeName>>, 'message'>], MessageT>,
    ) {
    }

    validate<Argument extends any>(value: Argument): Construct<any, Argument, Native<TypeName>, TypeofValidatable<TypeName, MessageT>> {

        return <Construct<any, Argument, Native<TypeName>, TypeofValidatable<TypeName, MessageT>>> new TypeofValidatable(value, this.type, this.message);
    }
}
