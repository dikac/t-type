import Native from "../../string/native";
export default function Type(value: unknown, type: Native, message?: (valid: boolean, value: unknown, type: Native) => string, error?: (message: string) => Error): Error;
