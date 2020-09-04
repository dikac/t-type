import NativeList from "../string";
import { Interface } from "./type";
export default function TypeStandard<TypeT extends NativeList = NativeList>(type: TypeT): Interface<TypeT, string>;
