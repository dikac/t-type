import Native from "../../string/native";

export default function Type(
    valid : boolean,
    value : unknown,
    type : Native
) : string {

    if(valid) {

        return `value is type of "${type}"`;

    } else {

        return `value is not type of "${type}"`;
    }
}
