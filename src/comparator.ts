export function comparator<type extends string | number>(
    a: type,
    b: type
): ComparisonResult {
    if (a > b) {
        return ComparisonResult.LT
    } else if (a < b) {
        return ComparisonResult.RT
    }

    return ComparisonResult.EQ
}

export enum ComparisonResult {
    LT = -1,
    EQ = 0,
    RT = 1,
}
