
import Collection = require('dw/util/Collection');
import Iterator = require('dw/util/Iterator');



declare function every<T>(collection: Collection<T>, cb:  (item: T) => boolean ) : boolean;
declare function every<T>(arr: Array<T>, cb: (item: T) => boolean ) :  boolean;
declare function every<T>(iter: Iterator<T>, cb:  (item: T) => boolean ) :  boolean;
declare function every<T>(nullable: null | undefined, cb:  (item: T) => boolean ) :  boolean;


export = every;
