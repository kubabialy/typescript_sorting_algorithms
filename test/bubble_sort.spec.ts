import {BubbleSort, functionalBubbleSort} from '../src/bubble_sort'
import expect from 'expect'
import {comparator, reversedComparator} from '../src/comparator'

describe('src/bubble_sort.ts', () => {
    describe('BubbleSort.sort()', () => {
        it('should sort numbers in ascending order using bubble sort algorithm', () => {
            let input: Array<number> = [1, 4, 5, 2, 6]
            const bubbleSort = new BubbleSort()
            let result: Array<number> = bubbleSort.sort(input)
            expect(result).toEqual([1, 2, 4, 5, 6])
        })

        it('should sort letters in ascending order using bubble sort algorithm', () => {
            let input: Array<string> = ['c', 'b', 'd', 'a', 'e']
            const bubbleSort = new BubbleSort()
            let result: Array<string> = bubbleSort.sort(input)
            expect(result).toEqual(['a', 'b', 'c', 'd', 'e'])
        })

        it('should sort arrays in ascending order', () => {
            let input: Array<Array<number>> = [[1, 2, 3], [1, 3, 6, 4], [1]]
            const bubbleSort = new BubbleSort()
            let result: Array<Array<number>> = bubbleSort.sort(input)
            expect(result).toEqual([[1], [1, 2, 3], [1, 3, 6, 4]])
        })


        it('should sort numbers in descending order using bubble sort algorithm', () => {
            let input: Array<number> = [1, 4, 5, 2, 6]
            const bubbleSort = new BubbleSort()
            let result: Array<number> = bubbleSort.sort(input, reversedComparator)
            expect(result).toEqual([6, 5, 4, 2, 1])
        })

        it('should sort letters in descending order using bubble sort algorithm', () => {
            let input: Array<string> = ['c', 'b', 'd', 'a', 'e']
            const bubbleSort = new BubbleSort()
            let result: Array<string> = bubbleSort.sort(input, reversedComparator)

            expect(result).toEqual(['e', 'd', 'c', 'b', 'a'])
        })

        it('should sort arrays in descending order', () => {
            let input: Array<Array<number>> = [[1, 2, 3], [1, 3, 6, 4], [1]]
            const bubbleSort = new BubbleSort()
            let result: Array<Array<number>> = bubbleSort.sort(input, reversedComparator)
            expect(result).toEqual([[1, 3, 6, 4], [1, 2, 3], [1]])
        })
    })

    describe('functionalBubbleSort', () => {
        describe('()', () => {
            it ('should sort numbers in descending order', () => {
                let input: Array<number> = [1, 4, 5, 2, 6]
                let result: Array<number> = functionalBubbleSort(
                    input,
                    reversedComparator
               )
                expect(result).toEqual([6, 5, 4, 2, 1])
            })
            it('should sort numbers in ascending order', () => {
                let input: Array<number> = [1, 4, 5, 2, 6]
                let result: Array<number> = functionalBubbleSort(
                    input,
                    comparator
                )
                expect(result).toEqual([1, 2, 4, 5, 6])
            })

            it ('should sort words in descending order', () => {
                let input: Array<string> = ['z', 'c', 'foo', 'bar', 'baz']
                let result: Array<string> = functionalBubbleSort(
                    input,
                    reversedComparator
                )

                expect(result).toEqual(['z', 'foo', 'c', 'baz', 'bar'])
            });

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
