function factorial(n, acc ) {
        'use strict';
            if (n <= 1) return acc;
                return factorial(n - 1, n * acc);
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES6
console.log(factorial(100000, 1));

