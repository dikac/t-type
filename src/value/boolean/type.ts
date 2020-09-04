import Value from "@dikac/t-value/value";
import BooleanType from "../../boolean/type";
import String from "../../string";
import TypeInterface from "../../type/type";

export default function Type<
    Type extends String
>(
    value : Value<unknown> & TypeInterface<Type>
) : boolean {

    return BooleanType(value.value, value.type);
}
