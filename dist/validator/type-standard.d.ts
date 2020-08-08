import NativeList from "../string/native";
import { Interface } from "./type";
export default function TypeStandard<TypeT extends NativeList = NativeList>(type: TypeT): Interface<TypeT, string>;
