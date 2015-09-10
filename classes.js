'use strict';

class Parent {
    constructor(name) {
        this.name = name;
    }

    foo() {
        console.log(`hello world ${this.name}`);
    }
// can now have static methods only available to the class itself like in PHP
    static bar() {
        console.log('only the class itself can access this');
    }
}


const parent = new Parent('Joe');
console.log(parent.name);
parent.foo();

class Child extends Parent {
    constructor(name) {
        super(name);
    }

    baz() {

    }
}

const child = new Child('blaine');
child.foo();
