// A regular expression describes a pattern of characters - used for pattern matching or pattern searching, also commonly used for validation and pulling phone numbers, email addresses out of a body of text...pulling anything that has certain patterns.
let re; // Initalised a variable which stands for regular expression. 
re = /hello/; // set to the regular expression a regular expression literal- this is a regular expression.  
// console.log(re)
// console.log(re.source) // Will show the regular expression without forward slashes.

// Functions that evaluate expressions:

// exec() - Will Return results in an array if there is a match or null
const result = re.exec('hi world') // we pass in whatever we want to match the regular expression to (in this case, hello world). If we put in ('hi world') we will get null. 

console.log(result);// matches from the index number of the first matching text or digit. Then also outputs the actual string that we are matching. 