
import Collection = require('dw/util/Collection');
import Iterator = require('dw/util/Iterator');



declare function some<T>(collection: Collection<T>, cb:  (item: T) => boolean ) : boolean;
declare function some<T>(arr: Array<T>, cb: (item: T) => boolean ) :  boolean;
declare function some<T>(iter: Iterator<T>, cb:  (item: T) => boolean ) :  boolean;
declare function some<T>(nullable: null | undefined, cb:  (item: T) => boolean ) :  boolean;


export = some;
