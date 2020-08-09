import Native from "../string/native";
import Type from "./type";
export default function TypeStandard<TypeT extends Native = Native, Value = unknown>(value: Value, type: TypeT): Type<Value, TypeT, string>;
