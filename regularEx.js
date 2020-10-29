// A regular expression describes a pattern of characters - used for pattern matching or pattern searching, also commonly used for validation and pulling phone numbers, email addresses out of a body of text...pulling anything that has certain patterns.
let re; // Initalised a variable which stands for regular expression. 
re = /hello/i; // set to the regular expression a regular expression literal- this is a regular expression.  i = case insensitive.
// console.log(re)
// console.log(re.source) // Will show the regular expression without forward slashes.

// Functions that evaluate expressions:

// exec() - Will Return results in an array if there is a match or null
// const result = re.exec('hello world') // we pass in whatever we want to match the regular expression to (in this case, hello world). If we put in ('hi world') we will get null. 

// console.log(result);// matches from the index number of the first matching text or digit. Then also outputs the actual string that we are matching. 

// To log or do something with only certain parts of the result:
// console.log(result[0]); // we can select index number
// console.log(result.index); // Gives us index number
// console.log(result.input); // Gives us what we passed in

// test() - Returns true or false if there is a match
const result = re.test('Hello'); // case sensitive 'Hello' will be false.However we can meke our regular expression case insensititve using 'i flag' above - /hello/i;
console.log(result)