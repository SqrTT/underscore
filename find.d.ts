
import Collection = require('dw/util/Collection');
import Iterator = require('dw/util/Iterator');



declare function find<T>(collection: Collection<T>, cb:  (item: T) => boolean ) : T | undefined;
declare function find<T>(arr: Array<T>, cb: (item: T) => boolean ) :  T | undefined;
declare function find<T>(iter: Iterator<T>, cb:  (item: T) => boolean ) :  T | undefined;
declare function find<T>(nullable: null | undefined, cb:  (item: T) => boolean ) :  T | undefined;


export = find;
