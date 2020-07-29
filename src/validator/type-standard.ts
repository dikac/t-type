import Native from "../string/native";
import Type from "./type";
import StringType from "../validatable/string/type";

export default function TypeStandard<
    TypeT extends Native
>(
    value : unknown,
    type : TypeT
) : Type<TypeT, string> {

    return <Type<TypeT, string>> new Type(type, StringType)
}
