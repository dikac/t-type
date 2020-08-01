import InstanceInterface from "../instance";

type Infer<Type> = Type extends InstanceInterface<infer As> ? As : never;

export default Infer;
