function Developer(name) {
    this.name = name;
    this.type = "Developer"
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

function say() {
    console.log(`Hi i am ${this.name}. I am a ${this.type}.`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Rahul", 1));
employees.push(employeeFactory.create("Raisul", 2));
employees.push(employeeFactory.create("Jhon", 1));
employees.push(employeeFactory.create("Jack", 2));

employees.forEach(emp => {
    console.log('bind');
    say.bind(emp)();
    console.log('call');
    say.call(emp);
    console.log('apply');
    say.apply(emp);
});