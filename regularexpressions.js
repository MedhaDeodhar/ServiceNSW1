// 1 Write a function that determines if a string contains a valid email address

//RegExp.test(string)
function testStringContainsEmail(testString){
    return EMAIL_REGEX.test(testString);
}
console.log(testStringContainsEmail("My Name Is Luke and My Email is: luke.parker9@tafensw.edu.au"));


// 2 Write a function to find the index of the first character of a valid URL in a given string

// String.search(regEx)
function findIndexOfValidURL(testString) {
    return testString.search(URL_REGEX);
}
console.log(findIndexOfValidURL("Go To https://learn.sydneytafe.edu.au/ to learn more"));