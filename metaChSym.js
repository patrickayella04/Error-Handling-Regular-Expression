let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols



// String to match
const str = 'Hello World';


// Log Results
const result = re.exec(str);
console.log(result)

// Function tests that the reg Ex does or does not contain what we put in. 
function reTest(re, str) { 
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str)