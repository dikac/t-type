import TypeInterface from "../type";

type Value<Type> = Type extends TypeInterface<infer As> ? As : never;

export default Value;
