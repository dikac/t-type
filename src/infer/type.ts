import TypeInterface from "../type";

type Type<Type> = Type extends TypeInterface<infer As> ? As : never;

export default Type;
