// A regular expression describes a pattern of characters - used for pattern matching or pattern searching, also commonly used for validation and pulling phone numbers, email addresses out of a body of text...pulling anything that has certain patterns.
let re; // Initalised a variable which stands for regular expression.
re = /hello/; 
re = /hello/i; // set to the regular expression a regular expression literal- this is a regular expression.  i = case insensitive.
// re = /hello/g; // Global search - for an entire paragraph, will scan it all instances of hello, not just the first one it finds. 
// console.log(re)
// console.log(re.source) // Will show the regular expression without forward slashes.

// Functions that evaluate regular expressions:

// exec() - Will Return results in an array if there is a match or null
// const result = re.exec('hello world') // we pass in whatever we want to match the regular expression to (in this case, hello world). If we put in ('hi world') we will get null. 

// console.log(result);// matches from the index number of the first matching text or digit. Then also outputs the actual string that we are matching. 

// To log or do something with only certain parts of the result:
// console.log(result[0]); // we can select index number
// console.log(result.index); // Gives us index number
// console.log(result.input); // Gives us what we passed in

// test() - Returns true or false if there is a match
// const result = re.test('Hello'); // case sensitive 'Hello' will be false.However we can meke our regular expression case insensititve using 'i flag' above - /hello/i;
// console.log(result);

// match() - Return result array or null 
// const str = 'Hello There';
// const result = str.match(re); // works the opposit of exec() where we pass the string into the regular expression method.
// console.log(result);

// search() - Returns the index of the first match, if not found returns -1 (works similar to indexOf())
// const str = 'Patrick Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Returns new string with some or all matches of a pattern -- will find the regular expression, match it, then replace it with something else. 
const str = 'Hello There';
const newStr = str.replace(re, 'Good day');
console.log(newStr); 