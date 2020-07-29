import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import TypeBoolean from "../value/boolean/type";
import TypeInterface from "../type/type";
import Native from "../string/native";
import Type from "./type";
import StringType from "./string/type";


export default function TypeStandard<
    TypeT extends Native
>(
    value : unknown,
    type : TypeT
) : Type<TypeT, string> {

    return <Type<TypeT, string>> new Type(value, type, StringType)
}
