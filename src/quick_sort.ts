import { ComparisonResult } from './comparator'
import Sort, { FunctionalSort } from './sort'
import { swap } from './swap'

/**
 * Quick Sort is an in-place sorting algorithm. Developed by Tony Hoare in 1959 and published
 * two years later, it is still a commonly used algorithm for sorting.
 *
 * It is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the
 * array and partitioning the other elements into two sub-arrays, according to whether they
 * are less or greater than the pivot. The sub-arrays are sorted recursively.
 *
 * @see https://en.wikipedia.org/wiki/Quicksort
 */
export class QuickSort implements Sort {
    public sort<Type>(data: Array<Type>): Array<Type> {
        this.quickSort(data, 0, data.length - 1)

        return data
    }

    private quickSort<Type>(
        data: Array<Type>,
        left: number,
        right: number
    ): void {
        if (right - left === 1) {
            swap(data, left, right)
        }

        /**
         * Creating a pivot that is rounded down arithmetic mean of the sum of left and right value
         */
        const pivot = Math.floor((left + right) / 2)

        /**
         * Setting initial value for a comparison
         */
        let key = data[pivot]

        swap(data, left, pivot)

        /**
         * Setting indices for upcoming operations
         */
        let i = left + 1
        let j = right

        while (i < j) {
            while (i <= right && data[i] < key) {
                i++
            }
            while (j >= left && data[j] > key) {
                j--
            }
            if (i < j) {
                swap(data, i, j)
            }
        }

        swap(data, left, j)

        /**
         * As noted in the comments above the sub-arrays are going to be sorted recursively
         */
        if (left < j - 1) {
            this.quickSort(data, left, j - 1)
        }

        if (j + 1 < right) {
            this.quickSort(data, j + 1, right)
        }
    }
}

/**
 * TODO: make it work with comparator
 *
 * This isn't a perfect implementation but it gets the job done.
 * It's basically just a wrapper for the what QuickSort.sort() does
 */
export const functionalQuickSort: FunctionalSort = <type>(
    values: type[],
    comparator?: (a: type, b: type) => ComparisonResult
): type[] => {
    const left = 0
    const right = values.length - 1

    const quickSort = <type>(values: type[], left: number, right: number) => {
        if (right - left === 1) {
            swap(values, left, right)
        }

        const pivot = Math.floor((left + right) / 2)
        let key = values[pivot]

        swap(values, left, pivot)
        let i = left + 1
        let j = right

        while (i < j) {
            while (i <= right && values[i] < key) {
                i++
            }
            while (j >= left && values[j] > key) {
                j--
            }
            if (i < j) {
                swap(values, i, j)
            }
        }

        swap(values, left, j)
        if (left < j - 1) {
            quickSort(values, left, j - 1)
        }

        if (j + 1 < right) {
            quickSort(values, j + 1, right)
        }
    }

    quickSort(values, left, right)

    return values
}
