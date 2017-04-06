
import Collection = require('dw/util/Collection');
import Iterator = require('dw/util/Iterator');



declare function map<T, U>(collection: Collection<T>, cb:  (item: T) => U ) : Array<U>;
declare function map<T, U>(arr: Array<T>, cb: (item: T) => U ) :  Array<U>;
declare function map<T, U>(iter: Iterator<T>, cb:  (item: T) => U ) :  Array<U>;
declare function map<T, U>(nullable: null | undefined, cb:  (item: T) => U ) :  Array<U>;



export = map;
