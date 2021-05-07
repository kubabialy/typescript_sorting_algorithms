/**
 * Given how often list values are swapped the implementation
 * was moved to a separate file to make it more reusable
 */
export function swap<Type>(
    arr: Array<Type>,
    a: number,
    b: number
): Array<Type> {
    let holder = arr[a]
    arr[a] = arr[b]
    arr[b] = holder

    return arr
}
