import String from "../../string";
import Sentence from "@dikac/t-string/message/sentence";
import SentencesIs from "@dikac/t-string/message/sentences-is";


export default function Type(
    valid : boolean,
    value : unknown,
    type : String,
    subject : string = '',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const sentence = SentencesIs(
        valid,
        [subject],
        {
            valid:['is type of'],
            invalid:['is not type of'],
        }, [type]
    );

    if(!valid && conversion) {

        sentence.subject.push(conversion(value))
    }

    return sentence.message;
}
