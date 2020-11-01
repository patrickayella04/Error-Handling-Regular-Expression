let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;       // Must start with
re = / world$/i;  // Must end with
re = /^hello$/i;  // Must begin and end with
re = /^h.llo$/i;  // Matches any ONE character (the dot between h and L.)
re = /h*llo$/i;   // Matches any character 0 or more times
re = /gre?a?y/i;  // Optional character(gry also works)
re = /gre?a?y\?/i;  // Escape character(question mark with backslash is now taken as a literal)



// String to match
const str = 'Hello grey?';


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