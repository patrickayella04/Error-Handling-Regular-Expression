const user = { email: 'jdoe@gmail.com' };
try {
    // Will produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Will produce SyntaxError
    // eval('Hello World'); // Will evaluate javaScript within a string.

    // Will produce a URIError
    // decodeURIComponent('%');

    if (!user.name) {
        throw 'User has no name' // throw is how we throw an error that we catch below. 
    }

} catch (error) {
    console.log(error)
    // console.log(error.message);
    // console.log(error.name);
    // console.log(error instanceof ReferenceError) // Test to see what kind of error (error) is. 
} finally {
    console.log('Finally runs regardless of result...')
}

console.log('Program continues...') // A positive with try catch is that we can handle errors without stopping the entire script. Very elegant way of handling errors. 