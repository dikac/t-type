/**
 * multi purpose type interface
 */
export default interface Instance<T extends {
    new (...a: unknown[]): any;
}> {
    instance: T;
}
