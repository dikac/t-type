import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import TypeofString from "../../assert/string/type";
import TypeInterface from "../../type/type";
import Native from "../../string/native";

export default function Type(
    object : Readonly<Value<unknown> & TypeInterface<Native> & Validatable>
) : string {

    return TypeofString(object.valid, object.type);
}
