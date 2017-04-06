
import Collection = require('dw/util/Collection');
import Iterator = require('dw/util/Iterator');



declare function reduce<T, U>(arr: Array<T>, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U;
declare function reduce<T, U>(collection: Collection<T>, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
declare function reduce<T, U>(iter: Iterator<T>, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U;



export = reduce;