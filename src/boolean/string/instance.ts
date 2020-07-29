export default function Instance<Instance extends {new(...a:unknown[]): any}>(
    valid : boolean,
    value : unknown,
    type : Instance
) : string {

    if(valid) {

        return `value is instanceof of ${type}`;

    } else {

        return `value is not instanceof of ${type}`;
    }
}
