'use strict';

/**
 * using const over let so that I know that object cannot be mutated itself
 * properties of the object can however
 *
 * the video tutorial was suggesting to just always use const!
 *
 */
const foo = 1;
const x = {
    name: 'natac'
};

if (foo > 0) {
    // b is blocked scoped
    const b = 3;
    x.name = 'sean';
}
console.log(`seeing what is in the name propertie of object: ${x}
${x.name}`);
// console.log(b); throws error