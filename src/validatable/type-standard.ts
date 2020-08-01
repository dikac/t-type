import Native from "../string/native";
import Type from "./type";
import StringType from "./string/type";


export default function TypeStandard<
    TypeT extends Native = Native
>(
    value : unknown,
    type : TypeT
) : Type<TypeT, string> {

    return <Type<TypeT, string>> new Type(value, type, StringType)
}
