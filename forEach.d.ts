
import Collection = require('dw/util/Collection');
import Iterator = require('dw/util/Iterator');



declare function forEach<T>(collection: Collection<T>, cb:  (item: T, index: number, collection: Collection<T>) => void ) : void;
declare function forEach<T>(arr: Array<T>, cb: (item: T, index: number, arr: Array<T>) => void ) : void;
declare function forEach<T>(iter: Iterator<T>, cb:  (item: T, pos: number, iter: Iterator<T>) => void ) : void;
declare function forEach<T>(nullable: null | undefined, cb:  (item: T, index: number) => void ) : void;
declare function forEach<T>(obj: Object, cb:  (item: T, key: string, obj: Object) => void ) : void;



export = forEach;
