// Mendefinisikan Class

class Employee {
  doWork() {
    return `Complete!`;
  }
}

let scott = new Employee();
console.log(scott.doWork());

// Constructor
class Employee2 {
  constructor(name) {
    this._name = name;
  }
  doWork() {
    return `Complete!`;
  }
  getName() {
    return this._name;
  }
}

let scott2 = new Employee2("Fikar");
console.log(scott2);
console.log(scott2.getName());

// class Inheritance & super
export class Person {
  constructor(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

class Employee3 extends Person {
  constructor(name, title) {
    super(name);
    this._title = title;
  }
  doWork() {
    return this._name + " is Working";
  }
}

const employee = new Employee3("Taofik Arianto");
console.info(employee.getName());
console.info(employee.doWork());

export class _export extends Person {
  doWork() {
    console.info("Complete");
  }
}
