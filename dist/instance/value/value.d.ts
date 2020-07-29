import InstanceInterface from "../instance";
declare type Value<Type> = Type extends InstanceInterface<infer As> ? As : never;
export default Value;
