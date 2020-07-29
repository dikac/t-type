import Value from "@dikac/t-value/value";
import InstanceIterface from "../../instance/instance";
export default function Instance<Instance extends {
    new (...a: unknown[]): any;
}>(value: Value<unknown> & InstanceIterface<Instance>): boolean;
