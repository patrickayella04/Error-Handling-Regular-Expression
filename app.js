 
try {
    // Will produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    null.myFunction();
} catch (error) {
    console.log(`${error.name}: it's null!`)
    // console.log(error.message);
    // console.log(error.name);
    // console.log(error instanceof ReferenceError) // Test to see what kind of error (error) is. 
} finally {
    console.log('Finally runs regardless of result...')
}

console.log('Program continues...') // A positive with try catch is that we can handle errors without stopping the entire script. Very elegant way of handling errors. 