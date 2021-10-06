const person = {
    name: "Rahul",
    roll: 14,
    articles: ["a", "b", "c"],
    projects: [
        {
            name: "vinndo",
            techs: ['php', 'js']
        }
    ]
}

const deepFreeze = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    });
    Object.freeze(obj);
}

deepFreeze(person);
person.projects[0].name = "autopartsz";
console.log(person);

Object.create()