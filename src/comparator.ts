export function comparator<type>(
    a: type,
    b: type
): ComparisonResult {
    if (a === b)
        return ComparisonResult.EQ

    return a > b
        ? ComparisonResult.LT
        : ComparisonResult.RT
}

export function reversedComparator<type>(
    a: type,
    b: type
): ComparisonResult {
    if (a === b)
        return ComparisonResult.EQ

    return a > b
        ? ComparisonResult.RT
        : ComparisonResult.LT
}
export enum ComparisonResult {
    LT = -1,
    EQ = 0,
    RT = 1,
}
