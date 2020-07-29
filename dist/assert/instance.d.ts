import Fn from "@dikac/t-function/function";
export default function Type<Instance extends {
    new (...a: unknown[]): any;
}>(value: unknown, instance: Instance, error?: Fn<[unknown, Instance], Error>): asserts value is Instance;
