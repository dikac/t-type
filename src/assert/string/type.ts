import Native from "../../string/native";
import Sentence from "@dikac/t-string/message/sentence";
import SentencesIs from "@dikac/t-string/message/sentences-is";



export default function Type(
    valid : boolean,
    value : unknown,
    type : Native,
    subject : string = '',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const sentence = new SentencesIs(
        valid,
        [subject],
        {
            valid:['is type of'],
            invalid:['is not type of'],
        }, [type]
    );

    if(!valid && conversion) {

        sentence.value.push(conversion(value))
    }

    return sentence.message;
}
