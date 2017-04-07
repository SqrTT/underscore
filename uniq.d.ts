


declare function uniq<T>(
    array: Array<T>,
    isSorted : boolean,
    iteratee? : (item: T, index: number, arr: Array<T>) => boolean,
    context? : any
    ) : Array<T>;

declare function uniq<T>(
    array: Array<T>,
    iteratee? : (item: T, index: number, arr: Array<T>) => boolean,
    context? : any
    ) : Array<T>;


export = uniq;
