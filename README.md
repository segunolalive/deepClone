# Deep Clone

A nifty zero-dependency utility for deeply cloning javascript objects and arrays.

**NOTE**:   
Only enumerable properties are cloned. Non-enumerable  properties and Prototype chains are not cloned. If used with other data types, it simply returns the arguement passed.


## Why?
Where immutability matters, javascript fails the developer miserably. Although javascript provides some functional programming features, it manipulates complex data types by mutation. For example

    const a = { a: 1, b: 2, c: { d: 4 } }
    const b = a;
    a[b] = 3;
    console.log(a) // { a: 1, b: 3, c: { d: 4 } }
With `Object.assign`, we can get around this but it only takes us so far since it only performs a shallow copy while nested objects and arrays are still copied by reference.

    const a = { a: 1, b: 2, c: { d: 4 } }
    const b = Object.assign({}, a);
    console.log(b) // { a: 1, b: 3, c: { d: 4 } }
    a.a = 2 // no effect on b;
    console.log(b) // { a: 1, b: 3, c: { d: 4 } }
    a.c.d = 44; // changes b as well
    console.log(b) // { a: 1, b: 3, c: { d: 44 } }
This is what deepClone helps to solve.

    const deepClone = require('deepClone');

    let a = let a = {
        a: 1,
        b: 2,
        c: [1, 2, 3, {
            e: 5,
            f: [{
                  g: 1
                },
                {
                  h: 8
                }],
            i: 9}
            ],
            j: 10
        }
    let b = deepClone(a);
    a.c.f.g = 500
    b.c.f.g = 1 // unaffected by change in a's child object's values
This is particularly useful when mutation is not an option e.g in a Redux application.

## How To Use
    npm install --save deepclonejs

    const deepClone = require('deepclonejs');
then use as in the example above.
