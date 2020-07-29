import Native from "../native/native";
import TypeString from "../string/native";

export default function Type<T extends TypeString>(value : unknown, type : T) : value is Native<T> {

    return typeof value === type;
}
