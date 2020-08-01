import Fn from "@dikac/t-function/function";
import TypeString from "../string/native";
export default function Type<TypeName extends TypeString = TypeString>(value: unknown, type: TypeName, error?: Fn<[unknown, TypeName], Error>): asserts value is TypeName;
