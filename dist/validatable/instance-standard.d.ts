import Instance from "./instance";
export default function InstanceStandard<InstanceT extends {
    new (...a: unknown[]): any;
}>(value: unknown, instance: InstanceT): Instance<InstanceT, string>;
