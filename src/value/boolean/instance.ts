import Value from "@dikac/t-value/value";
import BooleanInstance from "../../boolean/instance";
import InstanceIterface from "../../instance/instance";

export default function Instance<
    Instance extends {new(...a:unknown[]): any}
>(
    value : Value<unknown> & InstanceIterface<Instance>
) : boolean {

    return BooleanInstance(value.value, value.instance);
}
