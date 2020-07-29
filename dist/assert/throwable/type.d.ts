import Native from "../../string/native";
import Function from "@dikac/t-function/function";
export default function Type(value: unknown, type: Native, message?: Function<[boolean, unknown, Native], string>, error?: Function<[string], Error>): Error;
