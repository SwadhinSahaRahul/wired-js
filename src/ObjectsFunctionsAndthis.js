console.log(this);

function a() {
    console.log(this);
    this.newVariable = 'hello';
}

var b = function () {
    console.log(this);
};

a();

console.log(newVariable);

b();

//------------------------------------------------//
var c = {
    name: 'The c object',
    log: function () {
        this.name = 'Updated c object';
        console.log(this);
    }
};

c.log();

//------------------------------------------------//
var d = {
    name: 'The d object',
    log: function () {
        var self = this;

        this.name = 'Updated d object';
        console.log(this);

        var setName = function (newName) {
            self.name = newName;
        };

        setName('Updated again! The d object');
        console.log(self);
    }
};

d.log();
