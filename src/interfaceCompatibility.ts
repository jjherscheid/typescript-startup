// Type compatibility
interface Named {
    name: string;
}

class Person {	// <-- Not implementing interface
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();