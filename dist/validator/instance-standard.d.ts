import Instance from "./instance";
export default function InstanceStandard<InstanceT extends {
    new (...a: unknown[]): any;
}>(instance: InstanceT): Instance<InstanceT, string>;
