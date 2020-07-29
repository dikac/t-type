import Fn from "@dikac/t-function/function";
import Native from "../string/native";
export default function Type(value: unknown, type: Native, error?: Fn<[unknown, Native], Error>): asserts value is Native;
