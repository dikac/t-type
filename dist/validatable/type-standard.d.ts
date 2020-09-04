import String from "../string";
import Type from "./type";
export default function TypeStandard<TypeT extends String = String, Value = unknown>(value: Value, type: TypeT): Type<Value, TypeT, string>;
