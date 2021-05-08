import { ComparisonResult } from './comparator'

export default interface Sort {
    sort<Type>(data: Type[]): Type[]
}

export interface FunctionalSort {
    <type extends string | number>(values: type[]): type[]
    <type>(
        values: type[],
        comparator: (a: type, b: type) => ComparisonResult
    ): type[]
}
