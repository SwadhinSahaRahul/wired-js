function greet(firstName, lastName, language) {

    language = language || 'es';
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);

    if (arguments.length === 0) {
        console.log('Missing Parameters');
        console.log('---------------');
        return;
    }
    console.log('------------------------');
}

greet();
greet('Jhon');
greet('Jhon', 'Doe');
greet('Jhon', 'Doe', 'English');