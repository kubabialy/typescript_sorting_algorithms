import Sort from './sort'
import { swap } from './swap'

/**
 * Bubble sort (sometimes referred to as sinking sort) is a simple sorting algorithm
 * that repeatedly steps through the list, compares adjacent elements and swaps them
 * if they are in the wrong order.
 *
 *
 * Performance of the Bubble sort is pretty bad, most of sorting algorithms you may
 * have heard about are probably significantly faster than this one.
 *
 * As per Wikipedia article the only advantage the Bubble Sort has over other algos
 * is a built-in ability to detect that the list is sorted efficiently.
 *
 * Important: Bubble Sort generally speaking should be avoided when it comes to
 * sorting bigger data collections.
 *
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 */
export class BubbleSort implements Sort {
    public sort<Type>(data: Type[]): Type[] {
        let swapped = true
        while (swapped) {
            swapped = false

            for (let i = 0; i < data.length - 1; i++) {
                /**
                 * This is the whole logic of this algorithm and the reason why its so simple.
                 * What happens here is that current index `i` is compared to the next index
                 * and if the value of the current one is higher than the next one they change places.
                 */
                if (data[i] > data[i + 1]) {
                    swap(data, i, i + 1)
                    swapped = true
                }
            }
        }

        return data
    }
}
