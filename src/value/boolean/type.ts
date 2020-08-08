import Value from "@dikac/t-value/value";
import BooleanType from "../../boolean/type";
import Native from "../../string/native";
import TypeInterface from "../../type/type";

export default function Type<
    Type extends Native
>(
    value : Value<unknown> & TypeInterface<Type>
) : boolean {

    return BooleanType(value.value, value.type);
}
