import String from "../../string";
export default function Type(value: unknown, type: String, message?: (valid: boolean, value: unknown, type: String) => string, error?: (message: string) => Error): Error;
