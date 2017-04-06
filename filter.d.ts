
import Collection = require('dw/util/Collection');
import Iterator = require('dw/util/Iterator');



declare function filter<T>(collection: Collection<T>, cb:  (item: T) => boolean ) : Array<T>;
declare function filter<T>(arr: Array<T>, cb: (item: T) => boolean ) :  Array<T>;
declare function filter<T>(iter: Iterator<T>, cb:  (item: T) => boolean ) :  Array<T>;
declare function filter<T>(nullable: null | undefined, cb:  (item: T) => boolean ) :  Array<T>;


export = filter;
