import Function from "@dikac/t-function/function";
export default function Instance<Instance extends {
    new (...a: unknown[]): any;
}>(value: unknown, instance: Instance, message?: Function<[boolean, unknown, Instance], string>, error?: Function<[string], Error>): Error;
