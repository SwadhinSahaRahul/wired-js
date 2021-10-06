class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn !== fnToRemove) {
                return fn;
            }
        });
    }

    fire() {
        this.observers.forEach(fn => {
            fn();
        })
    }
}

const subject = new Subject();

function observer1() {
    console.log(`Fire 1`);
}

function observer2() {
    console.log(`Fire 2`);
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer1);

subject.fire();