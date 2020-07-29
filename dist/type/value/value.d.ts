import TypeInterface from "../type";
declare type Value<Type> = Type extends TypeInterface<infer As> ? As : never;
export default Value;
