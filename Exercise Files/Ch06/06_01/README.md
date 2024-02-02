# Chapter 6 Lesson 1
Fetching data with hooks in React.

Learned how to fetch data from an external api. Used the Github API, found at https://api.github.com/users/{your-id}. Fetch data from here using useState and useEffect in combination.

Learned that 'fetch' is built in to the browser. It's a way of making an HTTP request to get some data.

Learned to add callback functions to other functions by appending .then() which uses the return of the previous function as an argument that you have to name.

Learned you can use a shorthand method for calling a useState set function. As the first value of useState is associated with the useState object, the function is already linked to the state variable.

Remember to pass an array to useEffect, if it is empty, it will only be called when it is first rendered.

Learned how to render JSON file using JSON.stringify. It takes 3 parameters: the data, replacer (a function that alters the behavior of the stringification process, set to null for default), and the defined tab space (ex: 2).