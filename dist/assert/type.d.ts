import TypeString from "../string";
export default function Type<TypeName extends TypeString = TypeString>(value: unknown, type: TypeName, error?: (value: unknown, type: TypeName) => Error): asserts value is TypeName;
