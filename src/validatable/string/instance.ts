import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import InstanceString from "../../boolean/string/instance";
import InstanceInterface from "../../instance/instance";

export default function Instance(
    object : Readonly<Value<unknown> & InstanceInterface<{new(...a:unknown[]): any}> & Validatable>
) : string {

    return InstanceString(object.valid, object.value, object.instance);
}
