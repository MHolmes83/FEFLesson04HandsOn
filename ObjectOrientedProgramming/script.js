class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myCar = new Vehicle('Nissan', 'Rogue', 2017);

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    run() {
        console.log(this.firstName + " " + this.lastName + " is running.");
    }
    walk() {
        console.log(this.firstName + " " + this.lastName + " is walking.");
    }
    greeting() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    }
}

let rose = new Person('Rose', 'Dawson');

class Car {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    get make() {
        return this._make;
    }

    set make(value) {
        const possibleMakes = ['Honda', 'Toyota', 'Nissan'];

        if(possibleMakes.includes(value)) {
            this._make = value;
        } else {
            throw Error(value + " is not a valid make");
        }
    }

    get description() {
        return this._year + " " + this._make + " " + this._model;
    }

}

let newCar = new Car('Nissan', 'Altima', '2019');

class newPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + ".");
    }

}

let andrew = new newPerson('Andrew', 32);
let mike = new newPerson('Mike', 24);
let frank = new newPerson('Frank', 38);

class schoolPerson{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        console.log("Hello, my name is " + this.firstName + ".");
    }

}

class NewStudent extends schoolPerson {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }

    studentInfo() {
        console.log(this.studentID + " " + this.lastName + ", " + this.firstName);
    }

}

let student = new NewStudent(3729574, 'Michael', 'Abernathy');

console.log(myCar);
rose.run();
rose.walk();
rose.greeting();
console.log(newCar);
andrew.greeting();
mike.greeting();
frank.greeting();
student.greeting();
student.studentInfo();