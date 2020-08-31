import Native from "../../string/native";
import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        valid:'is type of',
        invalid:'is not type of',
    }, ''
);

export default function Type(
    valid : boolean,
    type : Native,
    subject : string = '',
) : string {

    sentence.subject = subject;
    sentence.valid = valid;
    sentence.object = type;

    return sentence.message;
}
