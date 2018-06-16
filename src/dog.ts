// Sample class for showing that Typescript works

class Animal { 
    public numberOfLegs;
    constructor(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }         
}

class Dog extends Animal { 
    public barkStyle;
    constructor(barkStyle) { 	
        super(4)
        this.barkStyle = barkStyle;
    }         
}

// -------------------------
var dog = new Dog('Woef');
var dog2 = new Dog(23);
console.log(dog.numberOfLegs); // 4
console.log(dog.barkStyle);
