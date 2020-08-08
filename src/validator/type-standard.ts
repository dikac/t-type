import NativeList from "../string/native";
import Type, {Interface} from "./type";
import StringType from "../validatable/string/type";

export default function TypeStandard<
    TypeT extends NativeList = NativeList
>(
    type : TypeT
) : Interface<TypeT, string> {

    return <Interface<TypeT, string>> new Type(type, StringType)
}
