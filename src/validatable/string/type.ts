import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import TypeofString from "../../assert/string/type";
import TypeInterface from "../../type/type";
import String from "../../string";

export default function Type(
    object : Readonly<Value<unknown> & TypeInterface<String> & Validatable>
) : string {

    return TypeofString(object.valid, object.value, object.type);
}
