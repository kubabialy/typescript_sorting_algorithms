import expect from 'expect'
import { swap } from '../src/swap'

describe('src/swap.ts', () => {
    describe('swap()', () => {
        it('should swap keys of passed Array<number>', () => {
            const input = [1, 3, 5]
            expect(swap(input, 1, 2)).toEqual([1, 5, 3])
        })
        it('should swap keys of passed Array<string>', () => {
            const input = ['b', 'z', 'y']
            expect(swap(input, 1, 2)).toEqual(['b', 'y', 'z'])
        })
        it('should swap keys of passed Array<Array<number>>', () => {
            const input = [[1], [3, 4], [6, 2]]
            expect(swap(input, 1, 2)).toEqual([[1], [6, 2], [3, 4]])
        })
    })
})
