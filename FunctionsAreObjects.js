/**
 Functions Are Objects

 First Class Functions:
 Everything you can do with other types you can do with functions.
 Assign them to variables, pass them around, create on the fly.
 */

function a() {
    console.log('Inside');
}

a.language = 'english';

a.newFunc = (name) => {
    console.log(name);
};

console.log(a, a.language);

a.newFunc('Swadhin');