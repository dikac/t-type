import Type from "../type";
import TypeString from "../string";

export default function Type<TypeName extends TypeString>(value : unknown, type : TypeName) : value is Type<TypeName> {

    return typeof value === type;
}
