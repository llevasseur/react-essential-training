# Chapter 8 Lesson 2

Testing small function with Jest in React.

Created functions.js and functions.test.js in src. Think of functions as where our code is and functions.test is where we will write tests with Jest (loaded with create-react-app already)

Write tests in the test() function. It takes a name (string) and a callback function. This callback function will have another function in it called expect(). This function needs a chained function called toBe() attached to it or else it will error.

toBe() is a Jest matcher, there are a ton of different matchers you can make use of like truthiness, numbers, match strings, etc. Documentation at jestjs.io