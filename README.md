# Sorting Algorithms

This repository contains implementations of some sorting algorithms written in TypeScript.

It might not be a perfect implementation, but it should at least give you an idea of how a certain algorithm works.

You are free to use this as a package, as this repository will have more algorithms at some point.

Credits for a documentation should go to [Wikipedia](https://en.wikipedia.org)

## How to use

Say use want to use sort implemented in a form of a class:

```typescript
import { BubbleSort } from '../src/bubble_sort'

let foo = ['some', 'elements', ...]

foo = BubbleSort.sort(foo)
```

For a more functional way:

```typescript
import { functionalQuickSort } from '../src/quick_sort'
let someArray: Array<number> = [1, 4, 5, 2, 6]
someArray = functionalQuickSort(input, comparator)
```

## Notes

Many sorting algorithms are often available 'natively' in your language of choice. Unless there's a particular and valid reason for you to write your own implementation of a sorting algorithm I strongly recommend sticking to already available implementations.

Important note: Explicit return of the values in the implementations is done purposefully for those who are less familiar with JS/TS and its way of handling referenced values

## Contributing

Pull requests are welcome. If you want to add new algorithms just add some simple tests and fairly understandable implementation for others to go through.

## License

[MIT](https://choosealicense.com/licenses/mit/)
