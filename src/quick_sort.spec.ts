import {functionalQuickSort, QuickSort} from './quick_sort'
import * as expect from 'expect'
import {comparator} from "./comparator";
import {functionalBubbleSort} from "./bubble_sort";

describe('src/quick_sort.ts', () => {
    describe('QuickSort.sort()', () => {
        it('should sort numbers in asceding order using quick_sort algorithm', () => {
            let input: Array<number> = [1, 4, 5, 2, 6]
            const bubbleSort = new QuickSort()
            let result: Array<number> = bubbleSort.sort(input)
            expect(result).toEqual([1, 2, 4, 5, 6])
        })

        it('should sort letters in asceding order using quick_sort algorithm', () => {
            let input: Array<string> = ['c', 'b', 'd', 'a', 'e']
            const bubbleSort = new QuickSort()
            let result: Array<string> = bubbleSort.sort(input)
            expect(result).toEqual(['a', 'b', 'c', 'd', 'e'])
        })

        it('should sort arrays in asceding order', () => {
            let input: Array<Array<number>> = [[1, 2, 3], [1, 3, 6, 4], [1]]
            const bubbleSort = new QuickSort()
            let result: Array<Array<number>> = bubbleSort.sort(input)
            expect(result).toEqual([[1], [1, 2, 3], [1, 3, 6, 4]])
        })
    })

    describe('functionalQuickSort', () => {
        describe('()', () => {
            it('should sort numbers in ascending order', () => {
                let input: Array<number> = [1, 4, 5, 2, 6]
                let result: Array<number> = functionalQuickSort(
                    input,
                    comparator
                )
                expect(result).toEqual([1, 2, 4, 5, 6])
            })

            it('should sort words in ascending order', () => {
                let input: Array<string> = ['z', 'c', 'foo', 'bar', 'baz']
                let result: Array<string> = functionalBubbleSort(
                    input,
                    comparator
                )
                expect(result).toEqual(['bar', 'baz', 'c', 'foo', 'z'])
            })
        })
    })
})
