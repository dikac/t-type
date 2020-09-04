import Type from "../../../dist/assert/string/type";
import Native from "../../../dist/string";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, Native, string?], string>();

data.set([true, 1, "number"], 'is type of number');
data.set([true, [], "number"], 'is type of number');
data.set([true, [], "number", 'argument'], 'argument is type of number');

data.set([false, 1, "number"], 'number is not type of number');
data.set([false, [], "number"], 'object is not type of number');
data.set([false, [], "number", 'argument'], 'argument object is not type of number');



let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(Type(...args)).toBe(message);

    });

    i++;
}
