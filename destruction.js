let foo = {
    bar: 1,
    baz: 2
};
// can pull out the properties from objects using destructuring
// therefore this pulls out both bar and baz and assigns them to variables x & y
var { bar: x, baz: y} = foo;

var { bar } = foo;

console.log(`y = ${y}`);

console.log(`x = ${x}`);

console.log(`bar = ${bar}`);


// can make a function that accepts a object as the param and then use
// destructuring to pull out the variables I want from that object
// **** In this case the object only has two properties but image it having more
// or having a longer object variable name and not wanting to type all that out
// to increase the chance or error.
var add = function({ bar: a, baz: b }) {
    return a + b;
};

console.log(`using destructuring with a funciton ${add(foo)}`);