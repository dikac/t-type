import TypeInterface from "../type";
declare type Type<Type> = Type extends TypeInterface<infer As> ? As : never;
export default Type;
