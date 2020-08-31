import Sentence from "@dikac/t-message/sentence";
import Name from "@dikac/t-object/string/name";

const sentence = new Sentence(
    false,
    '',
    {
        valid:'is instanceof of',
        invalid:'is not instanceof of',
    }, ''
);

export default function Instance<Instance extends {new(...a:unknown[]): any}>(
    valid : boolean,
    instance : Instance,
    subject : string = '',
) : string {

    sentence.subject = subject;
    sentence.valid = valid;
    sentence.object = Name(instance);

    return sentence.message;
}
