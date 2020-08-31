export default function Instance<Instance extends {
    new (...a: unknown[]): any;
}>(valid: boolean, instance: Instance, subject?: string): string;
