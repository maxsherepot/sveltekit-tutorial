export function getEnabledKeysfromObj(obj) {
    Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate));

    const enabled = Object.filter(obj, ([key, value]) => value);

    return Object.keys(enabled);
}