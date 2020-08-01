import TypeInterface from "../type";
declare type Infer<Type> = Type extends TypeInterface<infer As> ? As : never;
export default Infer;
