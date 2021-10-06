const items = [1, 'Rahul', false, 1.25];

function Iterator(items) {
    this.items = items;
    this.index = 0;
    this.lastIndex = items.length - 1;
}

Iterator.prototype = {
    hasNext: function () {
        return this.index < this.items.length
    },
    next: function () {
        let item = this.items[this.index];
        this.index++;
        return item;
    },

    hasPrev: function () {
        return this.lastIndex >= 0;
    },

    prev: function () {
        return this.items[this.lastIndex--];
    }
}

const iter = new Iterator(items);

while (iter.hasNext()) {
    console.log(iter.next());
}

console.log("=>".repeat(10) + "<=".repeat(10));

while (iter.hasPrev()) {
    console.log(iter.prev());
}