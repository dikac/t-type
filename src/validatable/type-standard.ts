import Native from "../string/native";
import Type from "./type";
import StringType from "./string/type";


export default function TypeStandard<
    TypeT extends Native = Native,
    Value = unknown
>(
    value : Value,
    type : TypeT
) : Type<Value, TypeT, string> {

    return <Type<Value, TypeT, string>> new Type(value, type, StringType)
}
