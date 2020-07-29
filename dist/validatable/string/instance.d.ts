import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import InstanceInterface from "../../instance/instance";
export default function Instance(object: Readonly<Value<unknown> & InstanceInterface<{
    new (...a: unknown[]): any;
}> & Validatable>): string;
