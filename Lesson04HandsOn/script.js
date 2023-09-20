class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    getName() {
        console.log(this.name.toUpperCase());
    }

    getSalary() {
        console.log(this.salary);
    }

    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(descriptionOfJob, name, salary, hireDate) {
        super(name, salary, hireDate)
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because they " + this.descriptionOfJob + ".");
    }

}

class Desinger extends Employee {
    constructor(experience, name, salary, hireDate) {
        super(name, salary, hireDate)
        this.experience = experience;
    }

    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because of their " + this.experience + " years of experience.");
    }

}

class SalesAssociate extends Employee {
    constructor(degrees, name, salary, hireDate) {
        super(name, salary, hireDate)
        this.degrees = degrees;
    }

    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " due to their " + this.degrees + " degrees.");
    }
}

let darlene = new Manager('supervises staff', 'Darlene Jenkins', '$172,000', '24 June 2010');
let carla = new Desinger(9, 'Carla Young', '$100,000', '24 August 2021');
let matt = new SalesAssociate('BS - Nutrition', 'Matt Daye', '$85,000', '22 July 2022');

darlene.jobDescription();
carla.yearsExperience();
matt.degreeCompleted();