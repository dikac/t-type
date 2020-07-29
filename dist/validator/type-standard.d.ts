import Native from "../string/native";
import Type from "./type";
export default function TypeStandard<TypeT extends Native>(type: TypeT): Type<TypeT, string>;
