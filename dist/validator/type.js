import TypeofValidatable from "../validatable/type";
export default class Typeof {
    constructor(type, message) {
        this.type = type;
        this.message = message;
    }
    validate(value) {
        return new TypeofValidatable(value, this.type, this.message);
    }
}
//# sourceMappingURL=type.js.map