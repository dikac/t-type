import Native from "../native/native";
import TypeString from "../string/native";
export default function Type<TypeName extends TypeString>(value: unknown, type: TypeName): value is Native<TypeName>;
