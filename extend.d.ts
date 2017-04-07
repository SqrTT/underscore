

declare function extend<T, U>(target: T, p2: U): T & U;
declare function extend<T, U, I>(target: T, p2: U, p3: I): T & U & I;
declare function extend<T, U, I, K>(target: T, p2: U, p3: I, p4: K): T & U & I & K;
declare function extend<T, U, I, K, M>(target: T, p2: U, p3: I, p4: K, p5: M): T & U & I & K & M;
declare function extend(target: any, ...sources: any[]): any;

export = extend;

