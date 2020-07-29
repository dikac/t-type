export default function Instance<Instance extends {
    new (...a: unknown[]): any;
}>(valid: boolean, value: unknown, type: Instance): string;
