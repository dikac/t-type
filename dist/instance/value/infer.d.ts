import InstanceInterface from "../instance";
declare type Infer<Type> = Type extends InstanceInterface<infer As> ? As : never;
export default Infer;
